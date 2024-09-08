import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="mb-6">
      <Input
        type="text"
        placeholder="Search blog posts..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full"
      />
    </div>
  );
}
