import React, { useState } from "react";
import type { DataTableProps } from "./DataTable.types";

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // handle selection
  const toggleRow = (row: T) => {
    let updated: T[];
    if (selectedRows.find((r) => r.id === row.id)) {
      updated = selectedRows.filter((r) => r.id !== row.id);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  // handle sorting
  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
      if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortOrder]);

  // handle header click
  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="overflow-x-auto border rounded-md">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            {selectable && <th className="p-2"></th>}
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-2 text-left font-medium text-gray-700 cursor-pointer select-none"
                onClick={() => col.sortable && handleSort(col.dataIndex)}
              >
                {col.title}
                {sortKey === col.dataIndex && (
                  <span className="ml-1 text-xs">
                    {sortOrder === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {/* Loading */}
          {loading ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="p-4 text-center">
                Loading...
              </td>
            </tr>
          ) : data.length === 0 ? (
            // Empty state
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="p-4 text-center text-gray-500">
                No data available
              </td>
            </tr>
          ) : (
            sortedData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {selectable && (
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={selectedRows.some((r) => r.id === row.id)}
                      onChange={() => toggleRow(row)}
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="p-2">
                    {String(row[col.dataIndex])}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
