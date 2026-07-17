import { Card } from "../../../components/common";

function DashboardPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card title="Total Users">
          <p className="text-3xl font-bold">208</p>
        </Card>

        <Card title="Work Items">
          <p className="text-3xl font-bold">56</p>
        </Card>

        <Card title="Completed">
          <p className="text-3xl font-bold">42</p>
        </Card>

        <Card title="Pending">
          <p className="text-3xl font-bold">14</p>
        </Card>
      </div>
    </div>
  );
}

export default DashboardPage;