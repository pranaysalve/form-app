export function FormWrapper({ title, children }) {
  return (
    <>
      <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
        <h2 className="text-3xl font-bold justify-center">{title}</h2>
        {children}
      </div>
    </>
  );
}
