import Header from "src/components/Header";
import Meta from "src/components/Meta";
import { meta } from "src/utils/constants";

interface Props2 {
  children: React.ReactNode;
}

export default function AppLayout({ children }: Props2) {
  return (
    <div className="text-white">
      <Meta title={meta.title} description={meta.description} />
      <Header />
      <div className="container mt-[57px] flex">{children}</div>
    </div>
  );
}
