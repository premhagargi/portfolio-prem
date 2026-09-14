import { ServicesGrid } from "@/components/services-grid";

export const metadata = {
  title: "Services | Prem Hagaragi",
  description:
    "Hire Prem Hagaragi for full-stack web development, AI integration, custom enterprise platforms, and SEO optimisation.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <ServicesGrid />
    </main>
  );
}
