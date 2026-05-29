interface FlagProps {
  code: string;
}

export default function Flag({ code }: FlagProps) {
  return (
    <img
      src={`https://flagcdn.com/${code}.svg`}
      width="20"
      height="15"
      alt={code}
      style={{ borderRadius: 2 }}
    />
  );
}