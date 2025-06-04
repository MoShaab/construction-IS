"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema: z.ZodType<{
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}> = z.object({
    name: z.string().min(1, { message: "Project name is required." }),
    description: z.string().min(1, { message: "Description is required." }),
    startDate: z
      .string()
      .refine((date: string) => !isNaN(new Date(date).getTime()), {
        message: "Invalid start date.",
      }),
    endDate: z
      .string()
      .refine((date: string) => !isNaN(new Date(date).getTime()), {
        message: "Invalid end date.",
      }),
  })
  .superRefine((data: z.infer<typeof FormSchema>, ctx: z.RefinementCtx) => {
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);
    if (endDate <= startDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["endDate"],
        message: "End date must be after start date.",
      });
    }
  });

type Project = z.infer<typeof FormSchema>;

export function ProjectForm() {
  const form = useForm<Project>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  });

  function onSubmit(data: Project) {
    toast({
      title: "Project Submitted",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-lg space-y-6 p-6 bg-white shadow-lg rounded-lg"
        >
          <h1 className="text-2xl font-bold text-gray-800">Create Project</h1>

          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }: { field: ControllerRenderProps<Project, "name"> }) => (
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter project name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description Field */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }: { field: ControllerRenderProps<Project, "description"> }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter project description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Start Date Field */}
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }: { field: ControllerRenderProps<Project, "startDate"> }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* End Date Field */}
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }: { field: ControllerRenderProps<Project, "endDate"> }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-blue-500 text-white">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}