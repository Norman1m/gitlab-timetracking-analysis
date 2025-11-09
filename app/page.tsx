import TimeTrackingDashboard from "@/components/TimeTrackingDashboard";

export default function Home() {
  return (
      /* ADAPT THE DATES HERE ACCORDINGLY*/
    <TimeTrackingDashboard startDate={new Date("2025-11-04")} endDate={new Date("2025-11-11")} />
  );
}
