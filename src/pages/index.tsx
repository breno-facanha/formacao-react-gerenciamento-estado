import MenuItem from "@/components/template/MenuItem";
import { IconForms } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="
    flex flex-col justify-center items-center h-screen
    bg-gradient-to-br from-zinc-800 to-black
    ">
      <div>
        <MenuItem icone={<IconForms />} texto="Estado" url="/revisao/estado"/>
      </div>
    </div>
  );
}
