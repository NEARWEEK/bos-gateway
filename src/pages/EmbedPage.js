import { Widget } from "near-social-vm";

export default function EmbedPage() {
  return (
    <div className="d-inline-block position-relative overflow-hidden w-100">
      <Widget src="nearweekapp.near/widget/nearweek.com" props={{}} />
    </div>
  );
}
