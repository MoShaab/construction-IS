"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  quantity: z.number({ invalid_type_error: "Quantity must be a number." }).min(1, { message: "Quantity must be at least 1." }),
  unit: z.string().min(1, { message: "Unit is required." }),
  category: z.string().min(1, { message: "Category is required." }),
  minThreshold: z.number({ invalid_type_error: "Minimum threshold must be a number." }).min(1, {
    message: "Minimum threshold must be at least 1.",
  }),
});

type InventoryItem = z.infer<typeof FormSchema>;

export function InventoryForm() {
  const form = useForm<InventoryItem>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      quantity: 1,
      unit: "",
      category: "",
      minThreshold: 1,
    },
  });

  function onSubmit(data: InventoryItem) {
    toast({
      title: "You submitted the following values:",
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
          className="w-full max-w-md space-y-4 p-6 bg-white shadow-lg rounded-lg"
        >
          <h1 className="text-2xl font-bold text-gray-800">Add Inventory Item</h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }: { field: ControllerRenderProps<InventoryItem, "name"> }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter item name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }: { field: ControllerRenderProps<InventoryItem, "quantity"> }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter quantity"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unit"
            render={({ field }: { field: ControllerRenderProps<InventoryItem, "unit"> }) => (
              <FormItem>
                <FormLabel>Unit</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., pieces, bags, sets" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }: { field: ControllerRenderProps<InventoryItem, "category"> }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Enter category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="minThreshold"
            render={({ field }: { field: ControllerRenderProps<InventoryItem, "minThreshold"> }) => (
              <FormItem>
                <FormLabel>Minimum quantity for low stock alert</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter minimum threshold"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
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