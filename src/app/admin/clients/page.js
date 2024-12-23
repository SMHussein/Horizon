import AddEditClient from "@src/components/AddEditClient";
import ClientImage from "@src/components/ClientImage";
import Heading from "@src/components/Heading";
import { getClients } from "@utils/services";

async function page() {
  const clients = await getClients();

  return (
    <div>
      <Heading type={1} classes="mb-20">
        Current Clients
      </Heading>
      <div
        className="mb-20 grid gap-20 items-center justify-items-center"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))" }}
      >
        {clients.map((client) => (
          <ClientImage
            client={client}
            key={client.name}
            name={true}
            classes="border min-w-[400px] relative"
          />
        ))}
      </div>

      <AddEditClient />
    </div>
  );
}

export default page;
