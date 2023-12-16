
const StartupModal = ({ startup, isPopupOpen, setPopupOpen }) => {

  return (
    
    <>
    
        {
            isPopupOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-50">
                
                    <div className="bg-white p-4 :p-8 rounded shadow-lg xs:m-10 sm:m-4 w-[90%] sm:w-[70%] lg:w-[50%] flex flex-col transition-all duration-300 ease-in-out transform opacity-100 scale-100">
                    
                        <p className="text-2xl sm:text-3xl font-bold mb-4 text-center">{startup?.StartupName}</p>

                        <table className="w-full border-2 border-black">
                            <tbody>
                            <tr className="border-2 border-black h-14">
                                <td className="p-2 border-2 border-black">Launched in</td>
                                <td className="p-2">{startup?.Date}</td>
                            </tr>

                            <tr className="border-2 border-black h-14">
                                <td className="p-2 border-2 border-black">Industry Type</td>
                                <td className="p-2">{startup?.IndustryVertical}</td>
                            </tr>

                            <tr className="border-2 border-black h-14">
                                <td className="p-2 border-2 border-black">Sub Vertical</td>
                                <td className="p-2">{startup?.SubVertical}</td>
                            </tr>

                            <tr className="border-2 border-black h-14">
                                <td className="p-2 border-2 border-black">Location</td>
                                <td className="p-2">{startup?.CityLocation}</td>
                            </tr>

                            <tr className="border-2 border-black h-14">
                                <td className="p-2 border-2 border-black">Investors</td>
                                <td className="p-2">{startup?.InvestorsName}</td>
                            </tr>

                            <tr className="border-2 border-black h-14">
                                <td className="p-2 border-2 border-black">Investment Type</td>
                                <td className="p-2">{startup?.InvestmentType}</td>
                            </tr>

                            <tr className="border-2 border-black h-14">
                                <td className="p-2 border-2 border-black">Funding</td>
                                <td className="p-2">{startup?.AmountInUSD} USD</td>
                            </tr>

                            </tbody>
                            

                        </table>
                        
                        <button className="bg-[#3f67ff] w-20 text-white px-2 py-1 sm:px-4 sm:py-2 rounded mt-3 self-end" onClick={() => {setPopupOpen(false)}}>
                            Close
                        </button>
                    </div>
                </div>
        )}

    </>     

  );
};

export default StartupModal;
