import { useState } from "react";
import Layout from "../components/layout";

export default function ApiExamplePage() {
  const [input, setInput] = useState("");
  const [path, setPath] = useState("");

  const onChange = () => {
    setPath(input);
  };
  return (
    <Layout>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>Session</h2>
      <h1>path :</h1>
      <input onChange={(e) => setInput(e.target.value)} />
      <h1 />
      <button onClick={() => setPath(input)}>Submit</button>
      <h1 />
      <iframe src={path} />
      <p>/api/examples/session</p>
      <iframe src="/api/examples/session" />
      <h2>JSON Web Token</h2>
      <p>/api/examples/jwt</p>
      <iframe src="/api/examples/jwt" />
    </Layout>
  );
}
