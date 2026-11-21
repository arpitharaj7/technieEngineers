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
import partnershipDeedUrl from "@/assets/deed.pdf?url";
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
          <dt className="text-xs text-slate-500">Registered Office Address</dt>
          <dd className="mt-1 font-semibold text-slate-900">Meerut, Uttar Pradesh, India</dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">Partners</dt>
          <dd className="mt-1 font-semibold text-slate-900">
            Refer to the{" "}
            <a
              href={partnershipDeedUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Partnership Deed
            </a>
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">Partnership Deed</dt>
          <dd className="mt-1 flex flex-col items-start gap-2 font-semibold">
            <a
              href={partnershipDeedUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              View Partnership Deed
            </a>
            <a
              href="https://drive.google.com/file/d/1PJJ4gOafnAhkVawx0rzadRsKDV7qpfbP/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Open Google Drive Copy
            </a>
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">GST Registration Number</dt>
          <dd className="mt-1 font-semibold text-slate-900">
            <a href="tel:+917417271092" className="text-primary underline underline-offset-4">
              Contact us for details
            </a>
          </dd>
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
            <a href="tel:+917417271092" className="text-primary underline underline-offset-4">
              Contact us to request a copy
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
              G-123, Dwarka Dham, Shivaya Modipuram, Meerut (U.P)
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
      </div>
    ),
  },
  { title: "List of Testing Facilities", icon: Gauge, summary: "Available testing laboratories and inspection facilities", content: <p>Our testing facilities include in-house quality checks and equipment for product verification, dimensional inspection and performance assessment.</p> },
  { title: "List of Tools, Plants & Machineries", icon: Wrench, summary: "Production tools, plant equipment and machinery", content: <p>This section contains the complete list of tools, production plants and machinery used across the manufacturing process.</p> },
  {
    title: "RDSO Approval Details",
    icon: BadgeCheck,
    summary: "RDSO vendor approval and registration information",
    content: (
      <div className="space-y-3">
        <p>
          Official RDSO approval details, vendor registration information and validity documents
          are listed here.
        </p>
        <a
          href={rdsoCertificateUrl}
          download="RDSO.pdf"
          className="inline-flex font-semibold text-primary underline underline-offset-4"
        >
          Download RDSO Certificate (PDF)
        </a>
      </div>
    ),
  },
  { title: "MSME Registration", icon: Building2, summary: "Micro, Small and Medium Enterprises registration", content: <p>MSME registration details and the applicable Udyam registration certificate can be reviewed here.</p> },
  { title: "Factory License", icon: FileCheck2, summary: "Valid licence and factory compliance documents", content: <p>Factory licence details and supporting statutory approvals are listed in this section.</p> },
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
  { title: "Organisation Chart", icon: Network, summary: "Management structure and reporting hierarchy", content: <p>The organisation chart represents the management, engineering, production, quality and administration structure.</p> },
  { title: "Testing Facilities as per Para 6.4 of STR", icon: PackageCheck, summary: "Testing capability information under applicable STR requirements", content: <p>This section records the testing and inspection facilities maintained in accordance with the relevant Specification for Tender Requirements.</p> },
  { title: "Mandatory Approvals", icon: FileText, summary: "Statutory and regulatory approvals", content: <p>Mandatory approvals, certificates and compliance records relevant to manufacturing and supply operations are presented here.</p> },
  { title: "Artisans", icon: HardHat, summary: "Skilled workforce and technical artisans", content: <p>Details of qualified artisans and skilled personnel involved in fabrication, assembly and quality operations are available in this section.</p> },
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
