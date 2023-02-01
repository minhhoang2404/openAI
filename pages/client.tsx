import Layout from "../components/layout";

export default function ClientPage() {
  async function generateMessage(formData: {
    prompt: string;
    n: number;
    size: string;
  }) {
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (!response.ok) {
        const { errMessage } = await response.json();
        throw new Error(errMessage);
      }
      const { data } = await response.json();
    } catch (error) {}
  }
  return (
    <Layout>
      <p></p>
      <input />
    </Layout>
  );
}
