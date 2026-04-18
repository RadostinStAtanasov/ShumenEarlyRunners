import { useFormStatus } from "react-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

<script
  src="https://your-site-or-cdn.com/fontawesome/v5.15.4/js/all.js"
  data-auto-a11y="true"
></script>;

export default function Submit() {
  const { pending } = useFormStatus();

  console.log(pending);

  if (pending == true) {
    setTimeout(() => {}, 3000);
  }

  return (
    <Button
      type="submit"
      disabled={pending}
      variant="contained"
      endIcon={<SendIcon />}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
