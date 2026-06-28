function SearchBar({
  search,
  setSearch,
  filter,
  setFilter,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <div className="grid md:grid-cols-2 gap-5">

        {/* Search */}

        <div>

          <label className="block text-gray-700 font-semibold mb-2">
            Search Tasks
          </label>

          <input
            type="text"
            placeholder="🔍 Search by title or description..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Filter */}

        <div>

          <label className="block text-gray-700 font-semibold mb-2">
            Filter
          </label>

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Tasks</option>
            <option value="Pending">Pending</option>
            <option value="Completed">
              Completed
            </option>
          </select>

        </div>

      </div>

    </div>
  );
}

export default SearchBar;