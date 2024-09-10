"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  ideaTitle: z
    .string()
    .min(5, { message: "Idea title must be at least 5 characters" }),
  ideaDescription: z
    .string()
    .min(20, { message: "Please provide more details about your idea" }),
});

type FormData = z.infer<typeof formSchema>;

export default function IdeasSubmissionPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  //   const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      console.log("Submitting idea:", data);
      const response = await axios.post("/api/submit-ideas", data);
      console.log("Submission response:", response);

      if (response.status === 200) {
        console.log("Idea submitted successfully");
        toast("Your idea has been submitted successfully.");
        reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting idea:", error);
      toast("Failed to submit your idea. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background text-foreground p-8">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Share Your Idea</h1>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">
              What We're Looking For
            </h2>
            <p className="mb-4">
              At SoloHub, we're excited to hear your innovative ideas that can
              help solo entrepreneurs thrive. We're particularly interested in
              ideas that:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Streamline workflows and boost productivity</li>
              <li>Solve common challenges faced by solo entrepreneurs</li>
              <li>Leverage technology to automate business processes</li>
              <li>
                Facilitate networking and collaboration among solopreneurs
              </li>
              <li>
                Provide innovative solutions for marketing, finance, or
                operations
              </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
              Submission Guidelines:
            </h3>
            <ul className="list-disc pl-5">
              <li>Clearly describe your idea and its potential impact</li>
              <li>Explain how it addresses a specific need or problem</li>
              <li>Consider the feasibility and scalability of your idea</li>
              <li>
                Be as specific as possible, but don't worry if you don't have
                all the technical details
              </li>
            </ul>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="ideaTitle"
              className="block text-sm font-medium mb-1"
            >
              Idea Title
            </label>
            <Input id="ideaTitle" {...register("ideaTitle")} />
            {errors.ideaTitle && (
              <p className="text-sm text-red-500 mt-1">
                {errors.ideaTitle.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="ideaDescription"
              className="block text-sm font-medium mb-1"
            >
              Idea Description
            </label>
            <Textarea
              id="ideaDescription"
              {...register("ideaDescription")}
              rows={5}
            />
            {errors.ideaDescription && (
              <p className="text-sm text-red-500 mt-1">
                {errors.ideaDescription.message}
              </p>
            )}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Idea"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
