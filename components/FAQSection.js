const faqs = [
  {
    q: 'Is Zeeventory only for ecommerce?',
    a: 'No. Many teams use Zeeventory for inventory and B2B sales only. The storefront is optional — turn it on when you want a public catalog and checkout.'
  },
  {
    q: 'Can we use our own domain for the store?',
    a: 'Yes. You can run on a subdomain provided by the platform or connect a custom domain with DNS verification when your plan supports it.'
  },
  {
    q: 'How do web store orders appear in the ERP?',
    a: 'Orders created on the storefront are sales orders in the same system your warehouse and finance teams already use, with channel metadata so you can filter ecommerce separately.'
  },
  {
    q: 'Where is data hosted?',
    a: 'Deploy Zeeventory on infrastructure you control or use our cloud — speak with your administrator about your environment and backup policies.'
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Answers for buyers and operators
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {q}
                  <span className="text-brand-500 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
