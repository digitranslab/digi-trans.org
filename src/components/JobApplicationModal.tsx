import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { GradientButton } from "./ui/gradient-button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  cv: z.any().refine((file) => file?.length === 1, "CV is required"),
  coverLetter: z.any().optional(),
});

interface JobApplicationModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  jobTitle: string;
  jobDescription: string;
}

export default function JobApplicationModal({
  open = false,
  onOpenChange,
  jobTitle,
  jobDescription,
}: JobApplicationModalProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Convert files to base64
      const cvBase64 = await fileToBase64(values.cv[0]);
      const coverLetterBase64 = values.coverLetter?.[0]
        ? await fileToBase64(values.coverLetter[0])
        : null;

      const templateParams = {
        to_email: "developers@digi-trans.org",
        from_name: `${values.firstName} ${values.lastName}`,
        from_email: values.email,
        job_title: jobTitle,
        job_description: jobDescription,
        cv_base64: cvBase64,
        cv_name: values.cv[0].name,
        cover_letter_base64: coverLetterBase64,
        cover_letter_name: values.coverLetter?.[0]?.name,
      };

      const result = await emailjs.send(
        "service_digitrans",
        "template_job_application",
        templateParams,
        "zncVbk6tYf6MaB0bH",
      );

      console.log("Email sent:", result);
      alert("Application submitted successfully!");
      onOpenChange?.(false);
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting application. Please try again.");
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  useEffect(() => {
    emailjs.init("zncVbk6tYf6MaB0bH");
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-slate-900 text-white border-slate-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Apply for {jobTitle}
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Please fill out the form below to apply for this position.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John"
                        className="bg-slate-800 border-slate-700"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Doe"
                        className="bg-slate-800 border-slate-700"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-slate-800 border-slate-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cv"
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                  <FormLabel>CV/Resume</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="bg-slate-800 border-slate-700"
                      onChange={(e) => onChange(e.target.files)}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coverLetter"
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                  <FormLabel>Cover Letter (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="bg-slate-800 border-slate-700"
                      onChange={(e) => onChange(e.target.files)}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <GradientButton
                type="submit"
                className="w-full"
              >
                Submit Application
              </GradientButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
