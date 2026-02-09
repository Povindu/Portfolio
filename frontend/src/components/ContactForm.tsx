import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      formData.append("access_key", import.meta.env.PUBLIC_WEB3FORM_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        const message = "Message failed to send. Please try again.";
        setError(message);
        return;
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        "Message failed to send. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <Card className="bg-emerald-50 border-emerald-200">
        <CardContent className="pt-6 text-center text-emerald-800">
          <p className="font-bold text-lg">Message Sent!</p>
          <p>I'll get back to you as soon as possible.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div
              role="alert"
              aria-live="polite"
              className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
            >
              {error}
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <label htmlFor="name" className="text-sm font-geist font-normal">
                Name
              </label>
              <Input
                className="mt-2"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="email" className="text-sm font-geist font-normal">
                Email
              </label>
              <Input
                className="mt-2"
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <label htmlFor="message" className="text-sm font-geist font-normal">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Hi, I'd like to discuss a project..."
              className="min-h-[120px] mt-2"
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
