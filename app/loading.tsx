import { Component as RocketLoader } from "@/components/ui/rocket-loader";

export default function Loading() {
  return (
    <main className="loading-screen" aria-label="Loading portfolio">
      <RocketLoader />
      <div className="loading-copy">
        <p>Ayaan Bijinemula</p>
        <h1>Loading portfolio</h1>
      </div>
      <div className="loading-bar" aria-hidden="true">
        <span />
      </div>
    </main>
  );
}
