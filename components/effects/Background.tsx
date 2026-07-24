export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black" />

      {/* Aurora blobs */}
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,.18), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,.15), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,.12), transparent 70%)",
        }}
      />
    </div>
  );
}
