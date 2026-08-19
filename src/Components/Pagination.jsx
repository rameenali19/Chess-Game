import Button from "./Button";
function Pagination({ games, page, setPage }) {
  return (
    <div className="flex justify-between px-2">
      {games.length >= 10 && (
        <Button
          text="Next Page"
          variant="outline"
          textSize="large"
          fontWeight="normal"
          onClick={() => {
            setPage(page + 1)
          }}
        />
      )}
      {page > 1 && (
        <Button
          text="Previous Page"
          variant="outline"
          textSize="large"
          fontWeight="normal"
          onClick={() => {
            setPage(page - 1)
          }}
        />
      )}
    </div>
  )
}
export default Pagination;