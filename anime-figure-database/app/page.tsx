import { Shops } from "@/components/shops";
import{WelcomeMessage} from "@/components/welcome-message";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-y-8">
      <WelcomeMessage />
      <Shops />
    </div>
  );
}
