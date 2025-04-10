// Client component for interactive elements
"use client";

import { useTranslation } from "react-i18next";
import LocalizedLink from "@/components/LocalizedLink";
import { Trans } from "react-i18next";
import Image from "next/image";

import MethodologyTitle from "@/app/components/methodology/MethodologyTitle";
import TranslatedMethodologySection from "@/app/components/methodology/TranslatedMethodologySection";
import TranslatedRatingCard from "@/app/components/methodology/TranslatedRatingCard";
import FAQ from "@/app/components/methodology/FAQ";
import DataSourceCard from "@/app/components/methodology/DataSourceCard";

type Metric = {
  name: string;
  description: string;
  methodology: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type Rating = {
  grade: string;
  label: string;
  description: string;
  color: string;
};

type DataSource = {
  icon: string;
  title: string;
  description: string;
};

export default function MethodologyPageContent({ locale }: { locale: string }) {
  const { t } = useTranslation();

  // Define methodology category icons
  const environmentalIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const socialIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const governanceIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );

  // Rating system data
  const ratingColors = {
    excellent: "emerald",
    very_good: "green",
    good: "lime",
    below_average: "amber",
    poor: "red",
    not_applicable: "gray"
  };

  // Default data sources in case translation fails
  const defaultDataSources: DataSource[] = [
    {
      icon: "📋",
      title: "Manufacturer Disclosures",
      description: "Information provided by companies about their products, processes, and supply chains."
    },
    {
      icon: "✅",
      title: "Third-Party Certifications",
      description: "Verified standards such as B Corp, Fair Trade, GOTS, Energy Star, FSC, and other certification programs."
    },
    {
      icon: "🧪",
      title: "Life Cycle Assessments",
      description: "Comprehensive evaluations of environmental impacts throughout a product's life cycle."
    },
    {
      icon: "📚",
      title: "Academic Research",
      description: "Peer-reviewed studies and publications from academic institutions and research organizations."
    },
    {
      icon: "🔍",
      title: "Independent Investigations",
      description: "Findings from NGOs, investigative journalists, and independent monitoring organizations."
    },
    {
      icon: "🌐",
      title: "Industry Benchmarks",
      description: "Data on industry averages and best practices for different product categories."
    }
  ];

  // Get data source translations individually with error handling
  let dataSources: DataSource[];
  try {
    dataSources = [
      {
        icon: "📋",
        title: t("methodology.data_sources.manufacturer.title", "Manufacturer Disclosures"),
        description: t("methodology.data_sources.manufacturer.description", "Information provided by companies about their products, processes, and supply chains."),
      },
      {
        icon: "✅",
        title: t("methodology.data_sources.certifications.title", "Third-Party Certifications"),
        description: t("methodology.data_sources.certifications.description", "Verified standards such as B Corp and Fair Trade."),
      },
      {
        icon: "🧪",
        title: t("methodology.data_sources.lifecycle.title", "Life Cycle Assessments"),
        description: t("methodology.data_sources.lifecycle.description", "Comprehensive evaluations of environmental impacts throughout a product's life cycle."),
      },
      {
        icon: "📚",
        title: t("methodology.data_sources.academic.title", "Academic Research"),
        description: t("methodology.data_sources.academic.description", "Peer-reviewed studies and publications from academic institutions."),
      },
      {
        icon: "🔍",
        title: t("methodology.data_sources.investigations.title", "Independent Investigations"),
        description: t("methodology.data_sources.investigations.description", "Findings from NGOs and investigative journalists."),
      },
      {
        icon: "🌐",
        title: t("methodology.data_sources.benchmarks.title", "Industry Benchmarks"),
        description: t("methodology.data_sources.benchmarks.description", "Data on industry averages and best practices."),
      },
    ];
  } catch (error) {
    console.error("Error loading data sources translations:", error);
    dataSources = defaultDataSources;
  }

  // Fallback FAQs in case translation is missing or not an array
  const fallbackFaqs: FAQ[] = [
    {
      question: "How do you gather your data?",
      answer: "We collect data from multiple verified sources including manufacturer disclosures, third-party certifications, lifecycle assessments, and academic research."
    },
    {
      question: "How often is your data updated?",
      answer: "We update our data regularly as new information becomes available, typically on a quarterly basis for most products."
    },
    {
      question: "Do you consider price in your ratings?",
      answer: "Our primary focus is on sustainability performance, not price. However, we do provide price information to help consumers make informed decisions. We believe sustainable options should be accessible to all, so we feature products at various price points."
    },
    {
      question: "How do you prevent greenwashing in your evaluations?",
      answer: "We look beyond marketing claims and require substantive evidence of sustainability practices. Our methodology prioritizes third-party verification, quantifiable metrics, and transparent reporting. Companies must demonstrate real impact, not just good intentions."
    },
    {
      question: "Can companies pay to improve their ratings?",
      answer: "Absolutely not. Our ratings are completely independent and cannot be influenced by financial considerations. We do not accept payment from companies to improve their ratings or to be featured on our platform."
    }
  ];

  // Get FAQ items with proper error handling
  let displayFaqs: FAQ[];
  try {
    const faqsItems = t("methodology.faqs.items", { returnObjects: true });
    
    // Process FAQ items if they exist as an array
    if (Array.isArray(faqsItems) && faqsItems.length > 0) {
      displayFaqs = faqsItems.map((item: any) => ({
        question: item?.question || "Frequently Asked Question",
        answer: item?.answer || "This answer is currently unavailable."
      }));
    } else {
      console.warn("FAQ items not found in translations or not in array format");
      displayFaqs = fallbackFaqs;
    }
  } catch (error) {
    console.error("Error loading FAQ translations:", error);
    displayFaqs = fallbackFaqs;
  }

  // Helper function to safely get translations with fallbacks
  const safeTranslate = (key: string, fallback: string) => {
    try {
      return t(key, fallback);
    } catch (error) {
      console.warn(`Translation key not found: ${key}`);
      return fallback;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-slate mb-6 animate-fade-in">
        <LocalizedLink href="/" className="hover:text-earth-green">
          {safeTranslate("navigation.home", "Home")}
        </LocalizedLink>
        <span className="mx-2">/</span>
        <span className="text-earth-green font-medium">
          {safeTranslate("methodology.title", "Methodology")}
        </span>
      </div>

      {/* Hero section */}
      <div className="text-center mb-16 animate-fade-in animate-delay-1">
        <MethodologyTitle />
        <p className="text-slate text-lg max-w-3xl mx-auto">
          {safeTranslate("methodology.subtitle", "How we evaluate products across multiple dimensions of sustainability to provide you with accurate, transparent, and actionable information.")}
        </p>
      </div>

      {/* Overview */}
      <div className="bg-white rounded-xl border border-light-gray p-8 mb-16 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-2">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="/images/methodology-illustration.svg"
                alt={safeTranslate("methodology.overview.image_alt", "Methodology Illustration")}
                className="object-cover"
                fill
                priority
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4">
              {safeTranslate("methodology.overview.title", "Our Approach to Product Evaluation")}
            </h2>
            <div className="space-y-4 text-slate">
              <p>{safeTranslate("methodology.overview.paragraph1", "At Ethix, we believe that making sustainable choices should be simple and accessible. Our methodology combines rigorous research, data analysis, and expert assessment to provide you with a comprehensive understanding of a product's environmental and social impact.")}</p>
              <p>{safeTranslate("methodology.overview.paragraph2", "We evaluate products across multiple dimensions, considering the entire lifecycle from raw material extraction to end-of-life disposal. Our goal is to help you make informed choices that align with your values and contribute to a more sustainable future.")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Methodology Process */}
      <div className="mb-16 animate-fade-in animate-delay-3">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-8 text-center">
          {safeTranslate("methodology.process.title", "Our Evaluation Process")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-light-gray relative hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-earth-green text-white flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-3 mt-4">
                {safeTranslate(`methodology.process.steps.${index}.title`, `Step ${index + 1}`)}
              </h3>
              <p className="text-slate">
                {safeTranslate(`methodology.process.steps.${index}.description`, "Evaluation step description.")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rating System */}
      <div className="mb-16 animate-fade-in animate-delay-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-8">
          {safeTranslate("methodology.rating_system.title", "Our Rating System")}
        </h2>
        <p className="text-slate mb-8">
          {safeTranslate("methodology.rating_system.description", "We use a letter-grade rating system (A-F) to make it easy to understand how products perform across different impact metrics.")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <TranslatedRatingCard ratingKey="excellent" grade="A" color={ratingColors.excellent} delay={0.1} />
          <TranslatedRatingCard ratingKey="very_good" grade="B" color={ratingColors.very_good} delay={0.2} />
          <TranslatedRatingCard ratingKey="good" grade="C" color={ratingColors.good} delay={0.3} />
          <TranslatedRatingCard ratingKey="below_average" grade="D" color={ratingColors.below_average} delay={0.4} />
          <TranslatedRatingCard ratingKey="poor" grade="F" color={ratingColors.poor} delay={0.5} />
          <TranslatedRatingCard ratingKey="not_applicable" grade="N/A" color={ratingColors.not_applicable} delay={0.6} />
        </div>

        <div className="bg-light-gray/30 p-6 rounded-lg mb-8">
          <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
            {safeTranslate("methodology.rating_system.calculation.title", "How We Calculate Overall Scores")}
          </h3>
          <div className="space-y-4 text-slate">
            <p>{safeTranslate("methodology.rating_system.calculation.paragraph1", "Overall product scores are calculated using a weighted average of applicable metrics. The weighting varies by product category to reflect the most significant impact areas for each type of product.")}</p>
            <p>{safeTranslate("methodology.rating_system.calculation.paragraph2", "For example, water usage is weighted more heavily for textile products, while energy efficiency receives greater emphasis for electronic devices. This category-specific approach ensures that products are evaluated fairly within their respective contexts.")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-light-gray hover:shadow-md transition-all duration-300">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
              {safeTranslate("methodology.rating_system.improvement.title", "Continuous Improvement")}
            </h3>
            <p className="text-slate">
              {safeTranslate("methodology.rating_system.improvement.description", "Our methodology is not static—we continuously refine our approach based on new research, evolving industry standards, and feedback from sustainability experts. We regularly review and update our ratings to reflect the latest information and best practices.")}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-light-gray hover:shadow-md transition-all duration-300">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
              {safeTranslate("methodology.rating_system.transparency.title", "Transparency")}
            </h3>
            <p className="text-slate">
              {safeTranslate("methodology.rating_system.transparency.description", "We believe in full transparency about our methodology. For each product evaluation, we provide detailed information about the data sources and criteria used. If we encounter data limitations or uncertainties, we clearly disclose these in our assessments.")}
            </p>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6">
          {safeTranslate("methodology.impact_metrics.title", "Our Impact Metrics")}
        </h2>
        <p className="text-slate mb-8">
          {safeTranslate("methodology.impact_metrics.description", "We evaluate products across 12 impact metrics, organized into three main categories. Each metric is carefully defined with specific criteria and evaluation standards.")}
        </p>

        {/* Methodology sections with progressive disclosure */}
        <div className="space-y-6 mb-8">
          <TranslatedMethodologySection categoryKey="environmental" icon={environmentalIcon} delay={0.1} />
          <TranslatedMethodologySection categoryKey="social" icon={socialIcon} delay={0.3} />
          <TranslatedMethodologySection categoryKey="governance" icon={governanceIcon} delay={0.5} />
        </div>

        <div className="text-center">
          <LocalizedLink href="/metrics" className="btn btn-primary">
            {safeTranslate("methodology.impact_metrics.explore_button", "Explore Our Impact Metrics in Detail")}
          </LocalizedLink>
        </div>
      </div>

      {/* Data Sources */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6">
          {safeTranslate("methodology.data_sources.title", "Our Data Sources")}
        </h2>
        <p className="text-slate mb-8">
          {safeTranslate("methodology.data_sources.description", "We use a variety of data sources to ensure comprehensive and accurate evaluations. These include:")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataSources.map((source, index) => (
            <DataSourceCard
              key={index}
              icon={source.icon}
              title={source.title}
              description={source.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Meet our team */}
      <div className="bg-light-gray/30 p-8 rounded-xl mb-16 transform transition-all duration-500 hover:scale-[1.01]">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6 text-center">
          {safeTranslate("methodology.team.title", "Meet Our Methodology Team")}
        </h2>
        <p className="text-slate mb-8 max-w-3xl mx-auto text-center">
          {safeTranslate("methodology.team.description", "Our methodology is developed and maintained by a diverse team of experts with backgrounds in sustainability science, environmental engineering, social responsibility, and product design.")}
        </p>

        <div className="text-center mb-8">
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden">
            <Image
              src="/images/team-photo.jpg"
              alt={safeTranslate("methodology.team.image_alt", "Ethix Methodology Team")}
              className="object-cover"
              fill
            />
          </div>
        </div>

        <div className="text-center">
          <LocalizedLink href="/about-us" className="btn btn-outline">
            {safeTranslate("methodology.team.learn_more", "Learn About Our Team")}
          </LocalizedLink>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-8 text-center">
          {safeTranslate("methodology.faqs.title", "Frequently Asked Questions")}
        </h2>

        <div className="space-y-6">
          {displayFaqs.map((faq, index) => (
            <FAQ
              key={index}
              question={faq.question}
              answer={faq.answer}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-earth-green/5 p-8 rounded-xl text-center animate-fade-in-up">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4">
          {safeTranslate("methodology.cta.title", "Ready to Explore Sustainable Products?")}
        </h2>
        <p className="text-slate mb-6 max-w-2xl mx-auto">
          {safeTranslate("methodology.cta.description", "Browse our evaluated product catalog and find options that align with your values.")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <LocalizedLink href="/products" className="btn btn-primary">
            {safeTranslate("methodology.cta.explore_button", "Explore Products")}
          </LocalizedLink>
          <LocalizedLink href="/metrics" className="btn btn-outline">
            {safeTranslate("methodology.cta.learn_button", "Learn More About Our Metrics")}
          </LocalizedLink>
        </div>
      </div>
    </div>
  );
}
