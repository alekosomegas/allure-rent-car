import Layout from "@/components/Layout";

const metaDescription = `Thank you for choosing Allure for your long term leasing in Cyprus.We will contact you soon.`;

export default function EnquirySent() {
  return (
    <Layout title="Thank you" description={metaDescription}>
      <main className="mx-auto max-w-screen-md px-14 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <img
            className="h-[400px] object-scale-down"
            src="/images/white-car.jpg"
          />
          <div>
            <h1 className="text-highlight1 text-4xl font-bold">Thank you!</h1>
            <p>
              We have received your enquiry and an agent will contact you soon.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
