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

const FormSchema = z.object({
  name: z.string().min(1, { message: "Supplier name is required." }),
  category: z.string().min(1, { message: "Category is required." }),
  phone: z.string().min(1, {message: "Phone is required"}),
  email: z.string().min(1, {message: "Please enter a valid email"}),
  address: z.string().optional(),
});

type Supplier = z.infer<typeof FormSchema>;

export function SupplierForm() {
  const form = useForm<Supplier>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      category: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  function onSubmit(data: Supplier) {
    toast({
      title: "Supplier Added",
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
          <h1 className="text-2xl font-bold text-gray-800">Add Supplier</h1>

          {/* Supplier Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }: { field: ControllerRenderProps<Supplier, "name"> }) => (
              <FormItem>
                <FormLabel>Supplier Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter supplier name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category Field */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }: { field: ControllerRenderProps<Supplier, "category"> }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="E.g., Electrical, Plumbing" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }: { field: ControllerRenderProps<Supplier, "phone"> }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: ControllerRenderProps<Supplier, "email"> }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address Field */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }: { field: ControllerRenderProps<Supplier, "address"> }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Optional: Enter address" {...field} />
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