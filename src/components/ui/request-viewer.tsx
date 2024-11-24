const RequestViewer = ({ data }: { data: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-base font-medium">Response:</p>
      <pre>{data}</pre>
    </div>
  );
};

export default RequestViewer;
