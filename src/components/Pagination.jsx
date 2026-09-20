import Button from "./Button";

function Pagination({ total, page, setPage }) {
  const totalPages = Math.ceil(total / 10);

  return (
    <div className="flex items-center justify-between px-2 mb-3">

      {page > 1 ? (
        <Button
          text="Previous Page"
          variant="outline"
          textSize="medium"
          fontWeight="normal"
          onClick={() => {
            setPage(page - 1);
          }}
        />
      ) : (
        <div></div>
      )}

      <span className="font-inter text-sm">
        Page {page} of {totalPages}
      </span>

      {page < totalPages ? (
        <Button
          text="Next Page"
          variant="outline"
          textSize="medium"
          fontWeight="normal"
          onClick={() => {
            setPage(page + 1);
          }}
        />
      ) : (
        <div></div>
      )}

    </div>
  );
}

export default Pagination;