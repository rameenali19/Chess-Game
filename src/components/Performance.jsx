import Icon from "./Icon";

function Performance({ singlePlayerGames, multiplayerGames, aiGames, singlePlayerWon, multiplayerWon,
  aiWon, singlePlayerLost, multiplayerLost, aiLost
}) {
  const singleplayerWinRate = (singlePlayerWon / singlePlayerGames) * 100 || 0;
  const multiplayerWinRate = (multiplayerWon / multiplayerGames) * 100 || 0;
  const aiWinRate = (aiWon / aiGames) * 100 || 0;

  const stats = [
    {
      mode: "Single Player",
      games: singlePlayerGames,
      wins: singlePlayerWon,
      lost: singlePlayerLost,
      rate: singleplayerWinRate,
      image: "greenButton"
    },
    {
      mode: "Multiplayer",
      games: multiplayerGames,
      wins: multiplayerWon,
      lost: multiplayerLost,
      rate: multiplayerWinRate,
      image: "orangeButton"
    },
    {
      mode: "Ai Bot",
      games: aiGames,
      wins: aiWon,
      lost: aiLost,
      rate: aiWinRate,
      image: "blueButton"
    }
  ]

  return (
    <div className="bg-[#FFF8EA] w-240 h-70 rounded-lg flex flex-col gap-5 px-5 py-5">
      <h1 className="font-playfair text-[#17384A] text-xl font-bold">Performance By Game Mode</h1>

      <table className="w-full font-inter">
        <thead className="border-b ">
          <tr className="font-inter text-xs text-gray-500">
            <th className="text-left pb-3">Game Type</th>
            <th>Games</th>
            <th>Won</th>
            <th>Lose</th>
            <th>Win Rate</th>
          </tr>
        </thead>

        <tbody>
          {
            stats.map((values) => {
              return (
                <tr key={values.mode}
                >
                  <td className="flex items-center gap-2 pt-3">
                    <Icon
                      name={values.image}
                      className="w-10 h-10"
                    />
                    <h1 className="font-inter text-[#17384A] text-sm font-medium">
                      {values.mode}
                    </h1>
                  </td>
                  <td className="text-center font-bold text-[#17384A]">{values.games}</td>
                  <td className="text-center text-[#35843C] font-bold">{values.wins}</td>
                  <td className="text-center text-[#D9413A] font-bold">{values.lost}</td>
                  <td className="text-center text-[#17384A] font-bold">{values.rate.toFixed(2)}%</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}
export default Performance;


// <Table>
//                     <TableHeader>
//                         <TableRow>
//                             <TableHead >Id</TableHead>
//                             <TableHead >CLient Id</TableHead>
//                             <TableHead >Template Id</TableHead>



//                             <TableHead >Priority</TableHead>
//                             <TableHead >Status</TableHead>

//                             <TableHead >Action</TableHead>
//                         </TableRow>
//                     </TableHeader>
//                     <tbody>
//                         {audits.length === 0 ? <EmptyTable /> :
//                             audits.map((audit) => {
//                                 return (
//                                     <TableRow key={audit.id}>
//                                         <TableCell>{audit.id}</TableCell>
//                                         <TableCell>{audit.client}</TableCell>
//                                         <TableCell>{audit.template}</TableCell>


//                                         <TableCell><PriorityBadge priority={audit.priority} /></TableCell>
//                                         <TableCell><StatusBadge status={audit.status} /></TableCell>



//                                         <TableCell>
//                                             <div className="flex gap-2">

//                                                 <Button icon="Edit" variant="Edit" iconSize="Small" onClick={() => {
//                                                     setSelectedAudit(audit);
//                                                     setShowModal(true);
//                                                 }}>Edit</Button>

//                                                 <Button icon="Details" iconSize="Small" variant="Details" onClick={() => { navigate(`/audits/audit-details/${audit.id}`) }}>Details</Button>
//                                                 <Button icon="Archive" iconSize="Small" variant="Archive/Deactivate" onClick={() => {
//                                                     setShowDeleteModal(true)
//                                                     setSelectedAudit(audit)
//                                                 }} >Archive</Button>
//                                             </div>
//                                         </TableCell>
//                                     </TableRow>
//                                 );
//                             })
//                         }
//                     </tbody>
//                 </Table>