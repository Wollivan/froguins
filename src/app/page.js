import { sql } from "@vercel/postgres";

export default async function Home() {
  const froguins = await sql`SELECT * FROM froguins`;

  return (
    <div>
      <h1>Froguins</h1>
      {froguins.rows.map((froguin) => {
        return (
          <div key={froguin.id}>
            <h3>{froguin.name}</h3>
            <p>{froguin.description}</p>
          </div>
        );
      })}
    </div>
  );
}
