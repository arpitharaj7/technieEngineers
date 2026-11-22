import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Factory,
  FileCheck2,
  FileText,
  Gauge,
  Hammer,
  HardHat,
  Landmark,
  Network,
  PackageCheck,
  PlugZap,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import isoApprovalImage from "@/assets/ISO-approval.jpg.png";
import rdsoCertificateUrl from "@/assets/RDSO.pdf?url";

const approvalDetails = [
  {
    title: "Ownership Details",
    icon: Landmark,
    summary: "Company ownership and legal information",
    content: (
      <dl className="grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">Legal Name</dt>
          <dd className="mt-1 font-semibold text-slate-900">Technie Engineers</dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">Constitution of Business</dt>
          <dd className="mt-1 font-semibold text-slate-900">Partnership</dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">Partners</dt>
          <dd className="mt-1 font-semibold text-slate-900">
            <span className="block">1. Anish Pushpan</span>
            <span className="block">2. Sherlin K Prakash</span>
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">Registered Office Address</dt>
          <dd className="mt-1 font-semibold text-slate-900">G-123 Dwarika Dham, Shivaya Modipuram, Meerut (U.P)</dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">Partnership Deed</dt>
          <dd className="mt-1 flex flex-col items-start gap-2 font-semibold">
            <a
              href="https://drive.google.com/file/d/1PJJ4gOafnAhkVawx0rzadRsKDV7qpfbP/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Open Deed
            </a>
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">GST Registration Number</dt>
          <dd className="mt-1 font-semibold text-slate-900">09AAWFT0332N1ZJ</dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">Contact Information</dt>
          <dd className="mt-1 font-semibold">
            <a href="tel:+917417271092" className="text-primary underline underline-offset-4">
              +91 74172 71092
            </a>
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">Download GST Certificate</dt>
          <dd className="mt-1 font-semibold">
            <a
              href="https://drive.google.com/file/d/1RzIDuvwPugzdrmocEdmbvNjle6ymhyN1/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Open GST Certificate
            </a>
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">Business Category</dt>
          <dd className="mt-1 font-semibold text-slate-900">
            Bridge Bearings & Infrastructure Solutions
          </dd>
        </div>
      </dl>
    ),
  },
  {
    title: "Manufacturing Unit",
    icon: Factory,
    summary: "Manufacturing location, capacity and operations",
    content: (
      <div className="space-y-5">
        <dl className="grid gap-3 text-sm sm:grid-cols-[minmax(11rem,0.8fr)_1.2fr]">
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="font-semibold text-slate-900">Manufacturing Unit Address</dt>
            <dd className="mt-1 text-slate-600">
              G-56 Phase-1, UPSIDC M.G Road Hapur, Uttar Pradesh, 201015
            </dd>
          </div>
        </dl>
        <div>
          <h3 className="text-sm font-semibold text-primary">Plant &amp; Machinery</h3>
          <p className="mt-2 rounded-r-xl border-l-4 border-primary bg-slate-50 p-4 leading-7 text-slate-600">
            Our manufacturing facility is equipped with advanced machinery for the production of
            elastomeric bearings, including rubber mixing units, moulding presses, vulcanizing
            equipment, cutting and drilling machines, fabrication tools, and quality testing
            equipment. The plant also includes dedicated blasting, painting, and stacking areas to
            ensure smooth production flow and quality compliance.
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1Ysc2LGufj7l7HcD1CZflqyzAUZ3eXDxx/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="inline-flex font-semibold text-primary underline underline-offset-4"
        >
          View Photographs
        </a>
      </div>
    ),
  },
  {
    title: "List of Testing Facilities",
    icon: Gauge,
    summary: "Available testing laboratories and inspection facilities",
    content: (
      <div className="space-y-3">
        <p>
          Our testing facilities include in-house quality checks and equipment for product
          verification, dimensional inspection and performance assessment.
        </p>
        <a
          href="https://drive.google.com/file/d/1y605NMdH7Vy1ckWNLMt1ulH9wSUT8eou/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="flex font-semibold text-primary underline underline-offset-4"
        >
          View Photographs
        </a>
        <a
          href="https://drive.google.com/file/d/1QAH9-vQaej0oYrZhrZSiFRRv4RKDaMSc/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="flex font-semibold text-primary underline underline-offset-4"
        >
          View List of Testing
        </a>
      </div>
    ),
  },
  {
    title: "List of Tools, Plants & Machineries",
    icon: Wrench,
    summary: "Production tools, plant equipment and machinery",
    content: (
      <div className="space-y-3">
        <p>
          This section contains the complete list of tools, production plants and machinery used
          across the manufacturing process.
        </p>
        <a
          href="https://drive.google.com/file/d/1saZGSlcXCxcZr2q5TvFnw9qYXdD3oFtc/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex font-semibold text-primary underline underline-offset-4"
        >
          View List of Tools and Machinery
        </a>
      </div>
    ),
  },
  {
    title: "RDSO Approval Details",
    icon: BadgeCheck,
    summary: "RDSO vendor approval and registration information",
    content: (
      <div className="overflow-hidden rounded-lg bg-white">
        <div className="grid gap-5 p-5 sm:grid-cols-2">
          {[
            {
              title: "ELASTOMERIC BEARINGS",
              rows: [
                ["Registration ID", "30221"],
                ["Annual Production Capacity", "8000"],
                ["Approval Date", "30/12/2025"],
                ["Next Quality Audit", "28/12/2030"],
              ],
            },
            {
              title: "POT CUM PTFE BEARINGS",
              rows: [
                ["Registration ID", "28881"],
                ["Annual Production Capacity", "800"],
                ["Approval Date", "20/08/2025"],
                ["Next Quality Audit", "18/08/2030"],
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-lg bg-[#59a1e8] px-6 py-5 text-white shadow-sm"
            >
              <h4 className="text-center text-base font-semibold uppercase tracking-wide">
                {card.title}
              </h4>
              <dl className="mt-5">
                {card.rows.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-b border-white/30 py-2.5 last:border-b-0"
                  >
                    <dt className="text-sm">{label}</dt>
                    <dd className="shrink-0 text-sm font-medium text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          <div className="sm:col-span-2 flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={rdsoCertificateUrl}
              download="RDSO.pdf"
              className="font-semibold text-primary underline underline-offset-4"
            >
              Download RDSO Certificate (PDF)
            </a>
            <a
              href="https://drive.google.com/file/d/1Ow0Zs5TNu0UCNs0N_e_SJ9Na2dkD44Ru/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary underline underline-offset-4"
            >
              Open RDSO Certificate Online
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "MSME Registration",
    icon: Building2,
    summary: "Micro, Small and Medium Enterprises registration",
    content: (
      <div className="space-y-3">
        <p>
          MSME registration details and the applicable Udyam registration certificate can be
          reviewed here.
        </p>
        <a
          href="https://drive.google.com/file/d/1ds3ox0EtDjcquVxx2kEOxpApmyjycRNJ/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="inline-flex font-semibold text-primary underline underline-offset-4"
        >
          Open MSME Registration Certificate
        </a>
      </div>
    ),
  },
  {
    title: "Factory License",
    icon: FileCheck2,
    summary: "Valid licence and factory compliance documents",
    content: (
      <div className="space-y-3">
        <p>Factory licence details and supporting statutory approvals are listed in this section.</p>
        <a
          href="https://drive.google.com/file/d/1oF8Z_sQIMgv_agveFFusBwS17e9HcAYa/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex font-semibold text-primary underline underline-offset-4"
        >
          View Factory License
        </a>
      </div>
    ),
  },
  {
    title: "ISO 9001 Certification",
    icon: ShieldCheck,
    summary: "Quality management system certification",
    content: (
      <div className="space-y-3">
        <p>
          ISO 9001 certification demonstrates our commitment to controlled quality processes,
          documented procedures and continual improvement.
        </p>
        <a
          href={isoApprovalImage}
          target="_blank"
          rel="noreferrer"
          className="inline-flex font-semibold text-primary underline underline-offset-4"
        >
          View ISO 9001:2015 Certificate
        </a>
      </div>
    ),
  },
  {
    title: "Organisation Chart",
    icon: Network,
    summary: "Management structure and reporting hierarchy",
    content: (
      <div className="space-y-3">
        <p>
          The organisation chart represents the management, engineering, production, quality and
          administration structure.
        </p>
        <a
          href="https://drive.google.com/file/d/169xNI2LqrhlKqOxKVyTPv7wSuoufY1-g/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex font-semibold text-primary underline underline-offset-4"
        >
          View Organisation Chart
        </a>
      </div>
    ),
  },
  {
    title: "Testing Facilities as per Para 6.4 of STR",
    icon: PackageCheck,
    summary: "Testing capability information under applicable STR requirements",
    content: (
      <div className="space-y-3">
        <p>
          This section records the testing and inspection facilities maintained in accordance
          with the relevant Specification for Tender Requirements.
        </p>
        <a
          href="https://drive.google.com/file/d/1QAH9-vQaej0oYrZhrZSiFRRv4RKDaMSc/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="inline-flex font-semibold text-primary underline underline-offset-4"
        >
          View Testing Facilities
        </a>
      </div>
    ),
  },
  {
    title: "Mandatory Approvals",
    icon: FileText,
    summary: "Statutory and regulatory approvals",
    content: (
      <div className="space-y-3">
        <p>
          Mandatory approvals, certificates and compliance records relevant to manufacturing and
          supply operations are presented here.
        </p>
        <a
          href="https://drive.google.com/file/d/13Jr-bercHm0NNQXLLy_prKLeUw3C9uBI/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="block font-semibold text-primary underline underline-offset-4"
        >
          Laboratory MOU
        </a>
        <a
          href="https://drive.google.com/file/d/1U-G8gO-P8hbW2BpzwOXVpJqs6WcHYNZ3/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="block font-semibold text-primary underline underline-offset-4"
        >
          View Mandatory Approvals
        </a>
      </div>
    ),
  },
  {
    title: "Artisans",
    icon: HardHat,
    summary: "Skilled workforce and technical artisans",
    content: (
      <div className="space-y-3">
        <p>
          Details of qualified artisans and skilled personnel involved in fabrication, assembly and
          quality operations are available in this section.
        </p>
        <a
          href="https://drive.google.com/file/d/1cx2pPNyzblpDA6JjNCCa7QiIr6KrRsU6/view"
          target="_blank"
          rel="noreferrer"
          className="inline-flex font-semibold text-primary underline underline-offset-4"
        >
          Open Artisans Details
        </a>
      </div>
    ),
  },
  { title: "Power Demand & Installed Power Supply", icon: PlugZap, summary: "Power requirement and installed electrical capacity", content: <p>Information about connected power demand, installed power supply and backup arrangements is documented here.</p> },
  { title: "Details Of Executed Works / Supplies In Last 5 Years", icon: Hammer, summary: "Recent completed projects and supply records", content: <p>Our major completed bridge engineering works and supplied products are summarised here, including relevant project and client details.</p> },
  { title: "Work In Hand", icon: Users, summary: "Current projects and ongoing orders", content: <p>Active project, production and supply commitments currently in progress are listed in this section.</p> },
];

export function VendorApproval() {
  return (
    <section id="vendor-rdso" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">RDSO Approved Vendor Details</span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Vendor Approval <span className="text-gradient-primary">RDSO</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Complete information about our ownership, manufacturing facilities, testing capabilities,
            approvals and quality certifications.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="grid gap-5 md:grid-cols-2">
          {approvalDetails.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.06 }}
              >
                <AccordionItem value={`item-${index}`} className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg data-[state=open]:border-primary/40 data-[state=open]:shadow-lg">
                  <AccordionTrigger className="px-5 py-5 text-slate-950 hover:no-underline sm:px-6">
                    <span className="flex items-center gap-4 pr-3 text-left">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-semibold">{item.title}</span>
                        <span className="mt-1 block text-xs font-normal leading-5 text-slate-500">{item.summary}</span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-slate-600 sm:px-6">
                    <div className="border-t border-slate-100 pt-5 leading-7">{item.content}</div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
