import AuthForm from "../../components/Auth/AuthForm";
import { redirect } from "react-router-dom";

export default function AuthenticationPage() {
  return <AuthForm />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    Response.json({ message: "Unsupported mode 422." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = fetch("https://api.earlyrunners.bg/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    Response.json({ message: "Could not authenticate user" }, { status: 500 });
  }

  // const resData = (await response).json();
  // const token = resData.token;

  //localStorage.setItem("token", token);

  return redirect("/login");
}
