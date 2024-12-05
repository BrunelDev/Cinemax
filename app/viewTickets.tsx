import { SafeAreaView, Text, useWindowDimensions, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
export default function ViewTickets() {
  return (
    <View className="h-screen bg-gray-800">
      <SafeAreaView>
        <TicketBackground fullname="Orens Cloudinho" ticketId="MV X845465315" time="09:30" date="1 Janvier 2025" seat={["F15", "F16"]} qrValue="LE kom est le meilleur repas de la journée"/>
      </SafeAreaView>
    </View>
  );
}
type Ticket = {
  ticketId: string;
  fullname: string;
  time: string;
  date: string;
  seat: string[];
  qrValue: string;
};
const TicketBackground = ({
  ticketId,
  fullname,
  time,
  date,
  seat,
  qrValue,
}: Ticket) => {
  const { width, height } = useWindowDimensions();
  const ticketWidth = width * 0.8;
  const ticketHeight = height * 0.8;
  return (
    <View
      style={{ height: ticketHeight, width: ticketWidth }}
      className={`bg-gray-600 mt-10 mx-auto flex flex-col overflow-hidden items-center rounded-xl`}
    >
      <View
        style={{ height: ticketHeight *0.6 + ticketWidth / 14 }}
        className="w-[110%] border  border-dashed border-white"
      >
        <View className="flex flex-col justify-around items-center pt-8 gap-3">
          <Text className="text-white text-2xl font-semibold">
            Scannez ce code QR
          </Text>
          <Text className="text-white  font-light text-lg mb-2">
            Présentez ce code QR à un scanner
          </Text>
                  <View className="p-8 rounded-3xl bg-gray-800">
                      <View className="rounded-3xl bg-black">
                          
                      <QRCode size={180} value={qrValue} />
                      </View>
            
          </View>
        </View>
      </View>

      <View
        style={{ width: ticketWidth / 7, height: ticketWidth / 7 }}
        className={`bg-gray-800 rounded-full  absolute top-[60%] left-0 -translate-x-1/2`}
      ></View>
      <View
        style={{ width: ticketWidth / 7, height: ticketWidth / 7 }}
        className="bg-gray-800 rounded-full absolute top-[60%] right-0 translate-x-1/2"
          ></View>
          <View className="w-full px-6">
              <Text className="text-white text-xl font-semibold w-full pt-8 text-center mb-5">
                  {ticketId}
              </Text>
              <View className="flex flex-col gap-8 w-full">
                  <View className="flex flex-row justify-between">
                      <View>
                          
                      <Text className="text-white text-lg">Nom</Text>
                          <Text className="text-white text-xl font-light">{ fullname}</Text>
                      </View>

                      <View>
                          
                      <Text className="text-white text-lg">Heure</Text>
                      <Text className="text-white text-xl font-light">{time}</Text>
                      </View>
                      
                  </View>

                  <View className="flex flex-row justify-between">
                      <View>
                          
                      <Text className="text-white text-lg">Date</Text>
                      <Text className="text-white text-xl font-light">{date}</Text>
                      </View>

                      <View>
                          
                      <Text className="text-white text-lg">Siège</Text>
                          <Text className="text-white text-xl font-light">{seat.map((s) => {return (s)+","
                              
                          })}</Text>
                      </View>
                      
                  </View>
                  
                  
              </View>
              
          </View>
    </View>
  );
};
