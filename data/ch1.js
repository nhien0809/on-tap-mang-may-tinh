// Quy ước: o[0] luôn là đáp án đúng (app sẽ tự xáo trộn khi hiển thị).
// l: 1 = Nhận biết, 2 = Thông hiểu, 3 = Vận dụng
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 1,
  title: "Khái niệm cơ bản",
  topics: "Phân loại mạng · Topo · Thiết bị LAN · VPN · Mô hình OSI, TCP/IP",
  questions: [
    // ===== NHẬN BIẾT (12) =====
    {
      l: 1,
      q: "Theo quy mô, mạng LAN (Local Area Network) thường được triển khai trong phạm vi nào?",
      o: [
        "Một văn phòng, một cơ quan nhỏ hoặc một tòa nhà",
        "Một thành phố với bán kính dưới 100 km",
        "Một quốc gia hoặc liên kết nhiều châu lục",
        "Trong tầm tay của một người dùng cá nhân"
      ],
      e: "LAN hoạt động trong phạm vi văn phòng, cơ quan nhỏ, tòa cao ốc. “Dưới 100 km” là MAN, “quốc gia/châu lục” là WAN, còn “trong tầm tay” là PAN."
    },
    {
      l: 1,
      q: "Mạng MAN (Metropolitan Area Network) hoạt động trong phạm vi khoảng bao nhiêu?",
      o: [
        "Dưới 100 km, kết nối nhiều mạng LAN",
        "Dưới 1 km, trong một tòa nhà cao tầng",
        "Dưới 10 m, xung quanh một người dùng",
        "Toàn cầu, kết nối nhiều quốc gia"
      ],
      e: "MAN (mạng đô thị) hoạt động trong phạm vi dưới 100 km và kết nối nhiều mạng LAN với nhau."
    },
    {
      l: 1,
      q: "Theo phương thức truyền, mạng máy tính được phân thành hai loại nào?",
      o: [
        "Broadcast và Point-to-Point",
        "Client-Server và Peer to Peer",
        "Mạng có dây và mạng không dây",
        "Mạng LAN và mạng WAN"
      ],
      e: "Theo phương thức truyền có Broadcast (quảng bá) và Point-to-Point (điểm nối điểm). Client-Server/P2P là phân loại theo quan hệ máy trạm; có dây/không dây theo đường truyền; LAN/WAN theo quy mô."
    },
    {
      l: 1,
      q: "Trong mạng LAN, thiết bị nào có chức năng chuyển đổi tín hiệu (quang ↔ điện, analog ↔ digital)?",
      o: ["Modem", "Router", "Switch", "Access Point"],
      e: "Modem chuyển đổi tín hiệu, ví dụ tín hiệu ánh sáng từ cáp quang thành tín hiệu điện chạy trong cáp UTP. Router định tuyến, Switch cấp cổng LAN, Access Point phát Wi-Fi."
    },
    {
      l: 1,
      q: "Thiết bị nào phát sóng Wi-Fi để kết nối điện thoại và laptop vào mạng LAN?",
      o: ["Access Point", "Modem", "Switch", "Hub"],
      e: "Access Point phát sóng Wi-Fi (Wireless Fidelity) để kết nối các thiết bị không dây. Switch và Hub kết nối máy bằng cáp."
    },
    {
      l: 1,
      q: "Mô hình tham chiếu OSI được tổ chức nào ban hành vào những năm 80?",
      o: [
        "ISO – Tổ chức tiêu chuẩn hóa quốc tế",
        "IEEE – Hội Kỹ sư Điện và Điện tử",
        "IETF – Nhóm đặc trách kỹ thuật Internet",
        "ICANN – Tổ chức quản lý tên miền"
      ],
      e: "Mô hình OSI (Open Systems Interconnection) do ISO (International Organization for Standardization) ban hành vào những năm 80."
    },
    {
      l: 1,
      q: "Mô hình TCP/IP gồm bao nhiêu tầng?",
      o: ["4 tầng", "5 tầng", "7 tầng", "3 tầng"],
      e: "TCP/IP gồm 4 tầng: Application, Transport, Internet, Link. Lưu ý: 5 tầng là mô hình dùng trong giáo trình, 7 tầng là mô hình OSI."
    },
    {
      l: 1,
      q: "Mô hình TCP/IP được giới thiệu lần đầu năm 1974 bởi những ai?",
      o: [
        "Robert E. Kahn và Vinton Cerf",
        "Robert Metcalfe và David Boggs",
        "Edsger Dijkstra và Richard Hamming",
        "Norman Abramson và Larry Roberts"
      ],
      e: "Robert E. Kahn và Vinton Cerf giới thiệu TCP/IP năm 1974, đặt tên theo hai giao thức TCP và IP. Metcalfe & Boggs gắn với Ethernet; Abramson gắn với ALOHA."
    },
    {
      l: 1,
      q: "Công nghệ Token Ring của IBM được chuẩn hóa thành chuẩn nào?",
      o: ["IEEE 802.5", "IEEE 802.3", "IEEE 802.11", "IEEE 802.15"],
      e: "Token Ring là chuẩn IEEE 802.5. IEEE 802.3 là Ethernet, IEEE 802.11 là Wi-Fi."
    },
    {
      l: 1,
      q: "Ứng dụng nào sau đây là ví dụ điển hình của mô hình mạng ngang hàng (Peer to Peer)?",
      o: [
        "Ứng dụng chia sẻ tệp BitTorrent",
        "Website thương mại điện tử",
        "Hệ thống đặt vé máy bay trực tuyến",
        "Máy chủ thư điện tử của cơ quan"
      ],
      e: "BitTorrent cho phép hai máy người dùng giao tiếp trực tiếp, không qua server. Các phương án còn lại đều cần máy chủ thường trực (Client-Server)."
    },
    {
      l: 1,
      q: "Trong mạng thông tin di động, mỗi ô (cell) có ít nhất một thiết bị nào?",
      o: [
        "Trạm thu phát sóng BTS",
        "Điểm truy cập Access Point",
        "Bộ chuyển mạch Switch",
        "Bộ chuyển đổi tín hiệu Modem"
      ],
      e: "Mỗi ô (cell) có ít nhất một trạm thu phát sóng BTS (Base Transceiver Station) hoặc cột ăng-ten truyền nhận sóng vô tuyến."
    },
    {
      l: 1,
      q: "Mạng cảm biến không dây (WSN) được xem là một dạng đặc biệt của loại mạng nào?",
      o: ["Mạng LAN", "Mạng WAN", "Mạng MAN", "Mạng PAN"],
      e: "Theo bài giảng, WSN (Wireless Sensor Network) là một dạng đặc biệt của mạng LAN, gồm các cảm biến kết nối không dây với nhau."
    },

    // ===== THÔNG HIỂU (16) =====
    {
      l: 2,
      q: "Phát biểu nào sau đây đúng với topo Bus?",
      o: [
        "Cáp đứt tại một vị trí làm toàn mạng mất kết nối",
        "Mỗi máy trạm nối riêng vào một thiết bị trung tâm",
        "Tín hiệu truyền một chiều nhờ chuyển thẻ bài",
        "Mạng vẫn hoạt động bình thường trong lúc bảo trì"
      ],
      e: "Bus dùng một đường cáp duy nhất nên chịu lỗi kém: cáp đứt tại 1 vị trí thì toàn mạng mất kết nối. Nối vào thiết bị trung tâm là Star; chuyển thẻ bài là Ring."
    },
    {
      l: 2,
      q: "Ưu điểm nổi bật của topo Star so với topo Bus là gì?",
      o: [
        "Một đoạn cáp nhánh đứt chỉ làm máy tương ứng mất kết nối",
        "Không cần thiết bị trung tâm nên tiết kiệm được chi phí",
        "Hoàn toàn loại trừ xung đột nhờ cơ chế chuyển thẻ bài",
        "Thiết bị trung tâm bị hỏng thì mạng vẫn hoạt động tốt"
      ],
      e: "Trong Star, mỗi máy có cáp nhánh riêng tới Hub/Switch nên một nhánh đứt chỉ ảnh hưởng máy đó, dễ bảo trì. Nhưng nếu Switch hỏng thì cả mạng bị ảnh hưởng."
    },
    {
      l: 2,
      q: "Điểm khác biệt cơ bản giữa Switch và Hub là gì?",
      o: [
        "Switch chỉ phát gói tin tới cổng có thiết bị đích",
        "Switch phát gói tin ra tất cả các cổng của nó",
        "Hub ghi nhớ địa chỉ MAC của thiết bị ở từng cổng",
        "Hub hạn chế xung đột tốt hơn Switch trong mạng"
      ],
      e: "Switch ghi nhớ địa chỉ MAC ở từng cổng và chỉ phát gói tới cổng có thiết bị đích, hạn chế xung đột. Hub phát ra tất cả các cổng nên tăng xung đột."
    },
    {
      l: 2,
      q: "Vì sao phương pháp chuyển thẻ bài (Token Passing) loại trừ hoàn toàn hiện tượng xung đột?",
      o: [
        "Chỉ trạm đang giữ token mới được quyền phát dữ liệu",
        "Mọi trạm đều lắng nghe đường truyền trước khi phát",
        "Mỗi trạm có một đường cáp riêng tới thiết bị trung tâm",
        "Tín hiệu được phát quảng bá tới tất cả các trạm"
      ],
      e: "Chỉ có duy nhất một token luân chuyển; trạm nào nhận token mới được phát dữ liệu trong một thời hạn nhất định nên không thể có hai trạm cùng phát."
    },
    {
      l: 2,
      q: "So với mạng không dây, đặc điểm nào sau đây của mạng có dây là <b>KHÔNG</b> đúng?",
      o: [
        "Tiện lợi và linh hoạt hơn",
        "Tốc độ truyền nhanh hơn",
        "Tín hiệu ổn định, ít nhiễu hơn",
        "Khó bị nghe trộm hơn"
      ],
      e: "Mạng có dây nhanh hơn, ổn định hơn, khó bị nghe trộm/phá sóng hơn nhưng BẤT TIỆN hơn và kém thời trang hơn mạng không dây."
    },
    {
      l: 2,
      q: "Trong công nghệ Token Ring, lược đồ vật lý và lược đồ logic lần lượt là gì?",
      o: [
        "Star và Token Passing",
        "Ring và Star",
        "Bus và Token Passing",
        "Star và Bus"
      ],
      e: "Token Ring dùng lược đồ vật lý dạng Star (qua thiết bị MAU) và lược đồ logic là Token Passing (vòng chuyển thẻ bài)."
    },
    {
      l: 2,
      q: "Theo nguyên lý phân tầng, dữ liệu thực sự được truyền như thế nào giữa hai máy?",
      o: [
        "Đi xuống các tầng dưới tới đường truyền rồi đi lên ở máy nhận",
        "Đi thẳng từ một tầng sang tầng đồng mức ở máy bên kia",
        "Chỉ đi qua tầng Ứng dụng và tầng Vật lý của hai máy",
        "Đi lên tầng trên cùng trước rồi mới xuống tầng dưới"
      ],
      e: "Các tầng chỉ “như thể” giao tiếp trực tiếp với tầng đồng mức (nhờ tính trong suốt). Thực tế dữ liệu không đi thẳng sang tầng đồng mức mà đi xuống tầng dưới, qua đường truyền rồi đi lên ở bên nhận."
    },
    {
      l: 2,
      q: "Trong giáo trình, tầng Ứng dụng tương ứng với những tầng nào của mô hình OSI?",
      o: [
        "Ứng dụng, Trình bày và Phiên",
        "Ứng dụng, Phiên và Giao vận",
        "Ứng dụng và Trình bày",
        "Ứng dụng, Giao vận và Mạng"
      ],
      e: "Tầng Ứng dụng của giáo trình = Application + Presentation + Session của OSI. Các tầng còn lại tương ứng với tầng cùng tên."
    },
    {
      l: 2,
      q: "Tầng Liên kết mạng (Link) của mô hình TCP/IP tương ứng với những tầng nào của OSI?",
      o: [
        "Liên kết dữ liệu và Vật lý",
        "Mạng và Liên kết dữ liệu",
        "Giao vận và Mạng",
        "Chỉ riêng tầng Vật lý"
      ],
      e: "Tầng Link (Network Access) của TCP/IP gộp hai tầng Data Link và Physical của OSI. Tầng Internet của TCP/IP tương ứng tầng Network."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về mô hình Khách - Chủ (Client-Server)?",
      o: [
        "Máy chủ hoạt động thường trực để xử lý yêu cầu từ máy khách",
        "Hai máy người dùng giao tiếp trực tiếp, không qua máy chủ",
        "Phần mềm không thuộc sở hữu của nhà cung cấp dịch vụ nào",
        "Các máy trạm có vai trò ngang nhau, không có máy chủ"
      ],
      e: "Trong Client-Server, server hoạt động 24/7 nhận và xử lý yêu cầu từ client. Ba phương án còn lại là đặc điểm của mô hình ngang hàng (P2P)."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về VPN client to site?",
      o: [
        "Máy người dùng phải cài phần mềm VPN client để kết nối VPN server",
        "Kết nối hai hay nhiều mạng LAN của các chi nhánh với nhau",
        "Phải thuê đường truyền riêng thay vì đi qua mạng Internet",
        "Không cần xác thực người dùng vì đường truyền đã mã hóa"
      ],
      e: "VPN client to site: người dùng cài VPN client, xác thực username/password với VPN server rồi tạo đường truyền mã hóa tới LAN ở xa. Kết nối các LAN với nhau là site to site; VPN không lập đường truyền riêng mà dùng Internet."
    },
    {
      l: 2,
      q: "Chức năng nào sau đây <b>KHÔNG</b> phải của Router trong mạng LAN gia đình?",
      o: [
        "Chuyển tín hiệu ánh sáng thành tín hiệu điện",
        "Định tuyến cho các gói tin ra Internet",
        "Cấp phát địa chỉ IP cho các thiết bị",
        "Chuyển đổi địa chỉ mạng (NAT)"
      ],
      e: "Chuyển tín hiệu quang ↔ điện là chức năng của Modem. Router định tuyến, cấp phát IP, làm tường lửa và thực hiện NAT."
    },
    {
      l: 2,
      q: "Ý nghĩa quan trọng nhất của việc ISO ban hành mô hình OSI là gì?",
      o: [
        "Sản phẩm theo chuẩn tương thích được với sản phẩm hãng khác",
        "Mỗi hãng được tự do thiết kế giao thức riêng không cần chuẩn",
        "Giảm số tầng trong kiến trúc mạng xuống còn bốn tầng",
        "Thay thế hoàn toàn mô hình TCP/IP trên mạng Internet"
      ],
      e: "Thời sơ khai công nghệ bị kìm hãm, thiếu cạnh tranh. Có chuẩn OSI, hãng nào tuân theo thì sản phẩm tương thích với hãng khác và được thị trường chấp nhận."
    },
    {
      l: 2,
      q: "Hiện tượng nào sau đây <b>KHÔNG</b> phải là mặt trái của mạng máy tính?",
      o: [
        "Chia sẻ tài nguyên phần cứng",
        "Lây lan phần mềm độc hại",
        "Phát tán thư rác (spam)",
        "Lừa đảo, tống tiền qua mạng"
      ],
      e: "Chia sẻ tài nguyên (phần cứng, phần mềm) là LỢI ÍCH của mạng. Mã độc, spam, lừa đảo là các mặt trái."
    },
    {
      l: 2,
      q: "Nhóm nào sau đây đều là tài nguyên phần mềm được chia sẻ qua mạng?",
      o: [
        "Dữ liệu, thông điệp, trình ứng dụng mạng",
        "Máy in, máy quét, thiết bị ngoại vi",
        "CPU, bộ nhớ RAM, thiết bị lưu trữ",
        "Cáp mạng, Switch, Access Point"
      ],
      e: "Tài nguyên phần mềm gồm dữ liệu, thông điệp, trình ứng dụng mạng. Thiết bị ngoại vi, CPU, RAM, thiết bị lưu trữ là tài nguyên phần cứng."
    },
    {
      l: 2,
      q: "Để các thành phần của mạng kết nối và trao đổi được với nhau, điều kiện bắt buộc là gì?",
      o: [
        "Sử dụng cùng một giao thức",
        "Do cùng một hãng sản xuất",
        "Chạy cùng một hệ điều hành",
        "Nằm trong cùng một tòa nhà"
      ],
      e: "Các thành phần mạng phải dùng cùng một giao thức (quy định cách mã hóa dữ liệu, mức tín hiệu, cấu trúc gói tin, cách xử lý lỗi...). Khác hãng, khác hệ điều hành vẫn trao đổi được."
    },

    // ===== VẬN DỤNG (12) =====
    {
      l: 3,
      q: "Công ty X có trụ sở ở Hà Nội và chi nhánh ở TP. HCM, muốn hai mạng LAN kết nối an toàn qua Internet mà không thuê đường truyền riêng. Giải pháp phù hợp nhất là gì?",
      o: [
        "VPN site to site",
        "VPN client to site",
        "Mạng cảm biến không dây",
        "Mạng cá nhân PAN"
      ],
      e: "VPN site to site kết nối hai hay nhiều mạng LAN (chi nhánh – trụ sở) qua đường truyền an toàn dựa trên Internet. Client to site dành cho từng máy trạm truy cập từ xa."
    },
    {
      l: 3,
      q: "Chị Mai đi công tác nước ngoài, cần truy cập phần mềm nội bộ đặt trong mạng LAN của công ty. Chị nên dùng giải pháp nào?",
      o: [
        "Cài VPN client và kết nối tới VPN server của công ty",
        "Thiết lập VPN site to site giữa khách sạn và công ty",
        "Kết nối trực tiếp vào Switch của công ty qua Wi-Fi",
        "Dùng mạng ngang hàng để chia sẻ tệp với đồng nghiệp"
      ],
      e: "Đây là tình huống điển hình của VPN client to site: máy cá nhân cài VPN client, xác thực với VPN server để truy cập LAN ở xa."
    },
    {
      l: 3,
      q: "Phòng thực hành 30 máy cần đảm bảo: một dây cáp hỏng thì chỉ máy đó bị ảnh hưởng, đồng thời bảo trì không phải dừng mạng. Nên chọn topo nào?",
      o: ["Star", "Bus", "Ring", "Mesh"],
      e: "Topo Star: một đoạn cáp nhánh đứt chỉ ngắt máy tương ứng, mạng vẫn hoạt động khi bảo trì/nâng cấp. Bus phải dừng mạng khi sửa chữa, mở rộng."
    },
    {
      l: 3,
      q: "Văn phòng A dùng topo Bus. Một ngày cáp trục bị đứt ở giữa. Hệ quả nào sẽ xảy ra?",
      o: [
        "Toàn mạng mất kết nối và khó tìm ra chỗ cáp đứt",
        "Chỉ máy ở gần chỗ đứt nhất bị mất kết nối",
        "Mạng tự chuyển sang chế độ chuyển thẻ bài",
        "Các máy vẫn liên lạc được qua thiết bị trung tâm"
      ],
      e: "Bus chịu lỗi kém và khó bảo trì: cáp đứt tại 1 vị trí thì toàn mạng mất kết nối, khó tìm chỗ đứt và trong lúc sửa thì mạng không hoạt động."
    },
    {
      l: 3,
      q: "Một khu rừng quốc gia lắp hàng trăm thiết bị đo nhiệt độ, độ ẩm, khói kết nối không dây với nhau để cảnh báo cháy. Đây là mô hình mạng nào?",
      o: [
        "Mạng cảm biến không dây (WSN)",
        "Mạng riêng ảo (VPN)",
        "Mạng cá nhân (PAN)",
        "Mạng đô thị (MAN-E)"
      ],
      e: "WSN gồm các cảm biến đo lường môi trường kết nối không dây; ứng dụng điển hình là chống cháy rừng, an ninh, nông nghiệp, nhà thông minh."
    },
    {
      l: 3,
      q: "Bạn Nam dùng đồng hồ thông minh, tai nghe không dây và điện thoại kết nối với nhau để nghe nhạc, nhận thông báo. Các thiết bị này tạo thành loại mạng nào?",
      o: ["PAN", "LAN", "MAN", "WAN"],
      e: "PAN (Personal Area Network) phục vụ một người, phạm vi trong tầm tay, một người dùng có nhiều thiết bị."
    },
    {
      l: 3,
      q: "Nhà bạn Hoa được kéo cáp quang vào nhà. Thiết bị đầu tiên cần dùng để chuyển tín hiệu ánh sáng thành tín hiệu điện chạy trên cáp UTP là gì?",
      o: ["Modem", "Switch", "Access Point", "Hub"],
      e: "Modem chuyển tín hiệu ánh sáng từ sợi cáp quang ngoài đường thành tín hiệu điện để chạy trong cáp mạng UTP."
    },
    {
      l: 3,
      q: "Một phòng thi dùng Hub làm thiết bị trung tâm cho 40 máy. Khi nhiều máy cùng truyền dữ liệu, hiện tượng nào dễ xảy ra nhất?",
      o: [
        "Xung đột tăng vì gói tin bị phát ra tất cả các cổng",
        "Mất kết nối toàn mạng vì một máy gặp sự cố",
        "Gói tin chỉ tới đúng máy đích nên mạng rất nhanh",
        "Mạng tự chuyển sang lược đồ logic Token Passing"
      ],
      e: "Hub phát lại gói tin ra tất cả các cổng, không phân biệt cổng nào nên tăng xung đột, giảm hiệu suất mạng. Nên thay bằng Switch."
    },
    {
      l: 3,
      q: "Một xã miền núi bị lũ cuốn trôi tuyến cáp mặt đất. Giải pháp kết nối Internet dự phòng phù hợp nhất là gì?",
      o: [
        "Mạng vệ tinh như Starlink",
        "Mạng LAN dùng cáp UTP",
        "Mạng cảm biến không dây",
        "VPN site to site qua cáp"
      ],
      e: "Theo Cục Viễn thông, Starlink là kênh dự phòng hiệu quả khi hệ thống mạng mặt đất gặp sự cố trong thiên tai, thảm họa."
    },
    {
      l: 3,
      q: "Anh Bình gọi điện thoại di động trên xe khách đang chạy qua nhiều vùng mà cuộc gọi không bị ngắt. Điều này có được nhờ cơ chế nào?",
      o: [
        "Tín hiệu được chuyển tiếp liên tục giữa các trạm BTS",
        "Điện thoại kết nối trực tiếp tới vệ tinh địa tĩnh",
        "Xe khách mang theo một Access Point phát Wi-Fi",
        "Cuộc gọi đi qua đường VPN site to site đã mã hóa"
      ],
      e: "Khi người dùng di chuyển qua các ô, tín hiệu được chuyển tiếp liên tục giữa các trạm BTS nên cuộc gọi được chuyển vùng mà không mất."
    },
    {
      l: 3,
      q: "Khi máy A gửi email cho máy B, dữ liệu ở máy A lần lượt đi qua các tầng nào (theo mô hình 5 tầng của giáo trình)?",
      o: [
        "Ứng dụng → Giao vận → Mạng → Liên kết dữ liệu → Vật lý",
        "Vật lý → Liên kết dữ liệu → Mạng → Giao vận → Ứng dụng",
        "Ứng dụng → Mạng → Giao vận → Liên kết dữ liệu → Vật lý",
        "Ứng dụng → Giao vận → Liên kết dữ liệu → Mạng → Vật lý"
      ],
      e: "Ở máy gửi, dữ liệu đi từ tầng trên xuống tầng dưới: Ứng dụng → Giao vận → Mạng → Liên kết dữ liệu → Vật lý. Thứ tự ngược lại xảy ra ở máy nhận."
    },
    {
      l: 3,
      q: "Một tổ chức có số máy trạm lớn muốn dùng mạng vòng chuyển thẻ bài nhưng vẫn dễ mở rộng, dễ bảo trì. Phương án nào phù hợp nhất?",
      o: [
        "Token Ring có lược đồ vật lý dạng Star (dùng MAU)",
        "Topo Bus với một đường cáp trục duy nhất",
        "Vòng cáp nối trực tiếp từng máy với máy kế tiếp",
        "Mạng ngang hàng không có thiết bị trung tâm"
      ],
      e: "Token Ring dùng lược đồ vật lý Star (qua MAU) nên có ưu điểm của Star (dễ mở rộng, dễ bảo trì) và tương đối ổn định khi số máy trạm lớn."
    },

    // ================= BỔ SUNG (40 câu, 12-16-12) =================
    // Câu có trường m là dạng "chọn tất cả đáp án đúng": m = chỉ số các phương án đúng.

    // ===== NHẬN BIẾT (12) =====
    {
      l: 1,
      q: "Thuật ngữ “Topo” trong phân loại mạng được hiểu là gì?",
      o: [
        "Cấu trúc hình học bố trí các phần tử của mạng",
        "Giao thức quy định cấu trúc gói tin trên mạng",
        "Phạm vi địa lý mà mạng có thể bao phủ được",
        "Quan hệ giữa máy khách và máy chủ trong mạng"
      ],
      e: "Topo là cấu trúc hình học trong việc bố trí các phần tử của mạng: cách sắp xếp máy trạm, dây cáp, thiết bị và cách nối chúng với nhau. Phạm vi địa lý là phân loại theo quy mô; quan hệ máy khách – máy chủ là phân loại theo quan hệ máy trạm."
    },
    {
      l: 1,
      q: "Theo bài giảng, mạng có dây (hữu tuyến) gồm những dạng topo cơ bản nào?",
      o: ["Bus, Star, Ring", "Mesh, Tree, Star", "Bus, Mesh, Tree", "Ring, Mesh, Tree"],
      e: "Ba topo hữu tuyến cơ bản là Bus, Star, Ring. Mesh và Hierarchical (Tree) là các topo khác, hiếm dùng."
    },
    {
      l: 1,
      q: "Trong mạng LAN, thiết bị nào cung cấp các cổng LAN để cắm cáp UTP vào máy tính bàn?",
      o: ["Switch", "Modem", "Access Point", "Trạm BTS"],
      e: "Switch cung cấp các cổng LAN cắm cáp UTP vào máy tính bàn. Modem chuyển đổi tín hiệu, Access Point phát Wi-Fi, BTS là trạm thu phát của mạng di động."
    },
    {
      l: 1,
      q: "Để bảo mật, đường truyền VPN thường được mã hóa bởi giao thức nào?",
      o: ["IPSec", "HTTP", "SMTP", "DHCP"],
      e: "VPN không lập đường truyền riêng mà đi qua Internet, nên được mã hóa bởi các giao thức như IPSec."
    },
    {
      l: 1,
      q: "Phần mềm mã nguồn mở phổ biến nào cung cấp VPN client to site?",
      o: ["OpenVPN", "BitTorrent", "VMware ESXi", "Outlook"],
      e: "OpenVPN là phần mềm mã nguồn mở phổ biến nhất cung cấp VPN client to site, dùng giao thức mã hóa cùng tên. BitTorrent là ứng dụng chia sẻ tệp P2P."
    },
    {
      l: 1,
      q: "Theo bài giảng, mạng WAN được chia thành những loại nào?",
      o: [
        "WAN xí nghiệp và WAN công cộng (Internet)",
        "WAN có dây và WAN không dây",
        "WAN quảng bá và WAN điểm nối điểm",
        "WAN nội bộ và WAN cá nhân"
      ],
      e: "WAN thường hình thành từ nhiều LAN, MAN và chia thành WAN xí nghiệp (Enterprise WAN) và WAN công cộng (Internet)."
    },
    {
      l: 1,
      q: "Chuẩn FDDI truyền tín hiệu theo phương pháp chuyển thẻ bài và dùng loại cáp nào?",
      o: ["Cáp quang", "Cáp UTP", "Cáp đồng trục", "Cáp điện thoại"],
      e: "Chuẩn FDDI dùng cáp quang và truyền tín hiệu theo phương pháp chuyển thẻ bài (Token Passing); đây là ví dụ mạng vòng vẫn còn được sử dụng."
    },
    {
      l: 1,
      q: "Thiết bị MAU (Multi station Access Unit) gắn với công nghệ mạng nào?",
      o: ["Token Ring", "Ethernet Bus", "Wi-Fi 802.11", "Mạng di động 5G"],
      e: "MAU là thiết bị trung tâm tạo lược đồ vật lý dạng Star cho Token Ring, trong khi lược đồ logic vẫn là vòng chuyển thẻ bài."
    },
    {
      l: 1,
      q: "Hiện tượng trên cùng một đường truyền xuất hiện hai tín hiệu khiến cả hai bị hỏng được gọi là gì?",
      o: ["Xung đột (Collision)", "Suy hao tín hiệu", "Tắc nghẽn mạng", "Lặp vòng (Loop)"],
      e: "Collision (đụng độ) xảy ra khi trên cùng một đường truyền có 2 tín hiệu, làm cả hai cùng bị hỏng – đặc trưng của topo Bus."
    },
    {
      l: 1,
      q: "Những thiết bị nào sau đây thường được tích hợp chung trong một thiết bị All-in-One của mạng LAN gia đình? (Chọn tất cả đáp án đúng)",
      o: ["Router", "Access Point", "Switch", "Trạm BTS"],
      m: [0, 1, 2],
      e: "Modem, Router, Access Point, Switch thường được tích hợp 2/3/4 thiết bị trong một (All-in-One). Trạm BTS thuộc hạ tầng mạng di động của nhà mạng."
    },
    {
      l: 1,
      q: "Những loại mạng nào sau đây thuộc cách phân loại theo quy mô trong bài giảng? (Chọn tất cả đáp án đúng)",
      o: ["PAN", "MAN", "VPN", "WSN"],
      m: [0, 1],
      e: "Theo quy mô có PAN, LAN, MAN, WAN. VPN và WSN là những dạng đặc biệt của mạng LAN, không phải một cấp quy mô."
    },
    {
      l: 1,
      q: "Theo bài giảng, mạng nội bộ RuNet đã thử nghiệm ngắt hoàn toàn kết nối với Internet toàn cầu (12/2019) thuộc quốc gia nào?",
      o: ["Nga", "Trung Quốc", "Triều Tiên", "Iran"],
      e: "Ngày 23/12/2019, chính phủ Nga tuyên bố thử nghiệm thành công việc ngắt kết nối giữa mạng nội bộ RuNet với Internet toàn cầu; RuNet trở thành mạng nội bộ lớn nhất thế giới."
    },

    // ===== THÔNG HIỂU (16) =====
    {
      l: 2,
      q: "Vì sao topo Bus được coi là đã lỗi thời?",
      o: [
        "Chịu lỗi kém, khó bảo trì và phải dừng mạng khi mở rộng",
        "Tốc độ truyền quá cao nên gây nhiễu cho thiết bị khác",
        "Cần quá nhiều thiết bị trung tâm đắt tiền để vận hành",
        "Không thể kết nối được quá hai máy trạm với nhau"
      ],
      e: "Bus dùng một đường cáp duy nhất: dễ xung đột, cáp đứt là cả mạng mất kết nối, khó tìm chỗ đứt, phải dừng mạng khi mở rộng/thu hẹp nên đã lỗi thời."
    },
    {
      l: 2,
      q: "Nhược điểm lớn nhất của topo Star là gì?",
      o: [
        "Thiết bị trung tâm hỏng thì các máy đều mất kết nối",
        "Một nhánh cáp đứt làm toàn mạng ngừng hoạt động",
        "Phải dừng toàn mạng mỗi khi thêm một máy trạm",
        "Tín hiệu chỉ truyền được theo một chiều cố định"
      ],
      e: "Star phụ thuộc vào thiết bị trung tâm (Hub/Switch): nếu Switch hỏng thì các máy nối vào nó mất kết nối. Nhánh cáp đứt chỉ ảnh hưởng một máy; mở rộng không cần dừng mạng."
    },
    {
      l: 2,
      q: "Những phát biểu nào sau đây đúng về phương pháp chuyển thẻ bài (Token Passing)? (Chọn tất cả đáp án đúng)",
      o: [
        "Chỉ có duy nhất một token luân chuyển",
        "Token luân chuyển theo một chiều",
        "Trạm giữ token được phát trong thời hạn nhất định",
        "Mọi trạm được phát đồng thời khi đường truyền rỗi"
      ],
      m: [0, 1, 2],
      e: "Chỉ có một token luân chuyển theo một chiều; trạm nhận token mới có quyền phát trong thời hạn nhất định nên loại trừ xung đột. Phát đồng thời khi rỗi chính là nguyên nhân gây xung đột."
    },
    {
      l: 2,
      q: "Mạng truyền theo phương thức quảng bá (Broadcast) có đặc điểm nào?",
      o: [
        "Các trạm dùng chung kênh, một trạm phát thì tất cả đều nhận",
        "Tín hiệu chỉ truyền giữa một máy phát và một máy thu",
        "Mỗi cặp máy có một đường truyền vật lý riêng biệt",
        "Tín hiệu phải qua Switch để tới đúng máy đích"
      ],
      e: "Broadcast: các trạm dùng chung một kênh, một trạm gửi thì tất cả nhận được (loa phường, vệ tinh, topo Bus, Ring). Truyền giữa một cặp phát – thu hay qua Switch là Point-to-Point."
    },
    {
      l: 2,
      q: "Trong mạng LAN gia đình, vì sao Router cần thực hiện chức năng NAT?",
      o: [
        "Để các thiết bị trong nhà kết nối được ra Internet",
        "Để chuyển tín hiệu quang thành tín hiệu điện",
        "Để phát sóng Wi-Fi cho điện thoại và laptop",
        "Để cung cấp thêm cổng LAN cho máy tính bàn"
      ],
      e: "Router chuyển đổi địa chỉ mạng (NAT) để các thiết bị trong nhà kết nối được ra Internet. Ba phương án còn lại lần lượt là chức năng của Modem, Access Point, Switch."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về tính “trong suốt” trong nguyên lý phân tầng?",
      o: [
        "Mỗi tầng hoạt động như đang giao tiếp trực tiếp với tầng đồng mức bên kia",
        "Dữ liệu đi trực tiếp giữa hai tầng đồng mức mà không qua các tầng dưới",
        "Mỗi tầng phải biết chi tiết cách hoạt động của mọi tầng bên dưới nó",
        "Các tầng dưới được phép đọc và sửa nội dung dữ liệu của tầng trên"
      ],
      e: "Nhờ sự trong suốt của các tầng dưới, mỗi tầng hoạt động “như thể” giao tiếp trực tiếp với tầng đồng mức; thực tế dữ liệu vẫn đi xuống tầng dưới rồi qua đường truyền."
    },
    {
      l: 2,
      q: "Nguyên lý phân tầng trong kiến trúc mạng ra đời chủ yếu nhằm mục đích gì?",
      o: [
        "Làm giảm độ phức tạp của việc thiết kế mạng",
        "Tăng tốc độ truyền dữ liệu trên đường truyền",
        "Giảm chi phí mua sắm các thiết bị mạng",
        "Loại bỏ hoàn toàn lỗi khi truyền dữ liệu"
      ],
      e: "Phân tầng để làm giảm độ phức tạp cho việc thiết kế mạng: mỗi tầng cung cấp dịch vụ cho tầng trên, giải quyết một phần yêu cầu và chuyển phần còn lại xuống tầng dưới."
    },
    {
      l: 2,
      q: "Những nội dung nào thuộc phạm vi quy định của một giao thức mạng? (Chọn tất cả đáp án đúng)",
      o: [
        "Phương thức mã hóa dữ liệu và các mức tín hiệu",
        "Cấu trúc của gói tin truyền trên mạng",
        "Cách xử lý lỗi và thao tác với gói tin",
        "Hãng sản xuất thiết bị được phép dùng"
      ],
      m: [0, 1, 2],
      e: "Giao thức quy định phương thức mã hóa dữ liệu và mức tín hiệu, cấu trúc gói tin, cách xử lý lỗi và thao tác xử lý gói tin. Giao thức không quy định hãng sản xuất – các hãng khác nhau vẫn trao đổi được nếu cùng giao thức."
    },
    {
      l: 2,
      q: "Tầng Internet của mô hình TCP/IP tương ứng với tầng nào của mô hình OSI?",
      o: [
        "Tầng Mạng (Network)",
        "Tầng Giao vận (Transport)",
        "Tầng Liên kết dữ liệu",
        "Tầng Phiên (Session)"
      ],
      e: "Tầng Internet của TCP/IP tương ứng tầng Network của OSI. Tầng Link của TCP/IP mới gộp Data Link và Physical."
    },
    {
      l: 2,
      q: "Phát biểu nào sau đây về VPN là <b>KHÔNG</b> đúng?",
      o: [
        "VPN phải lập đường truyền vật lý riêng",
        "VPN là một dạng đặc biệt của mạng LAN",
        "VPN được bảo mật bằng giao thức IPSec",
        "VPN gồm loại client to site và site to site"
      ],
      e: "VPN KHÔNG lập đường truyền riêng mà sử dụng Internet, rồi mã hóa (IPSec...) để bảo mật. Đây là sai lầm hay gặp do nhầm chữ “riêng” trong “mạng riêng ảo”."
    },
    {
      l: 2,
      q: "Những ứng dụng nào sau đây là ứng dụng của mạng cảm biến không dây được nêu trong bài? (Chọn tất cả đáp án đúng)",
      o: [
        "Chống cháy rừng, camera an ninh",
        "Nhà thông minh",
        "Giao thông thông minh",
        "Chia sẻ tệp qua BitTorrent"
      ],
      m: [0, 1, 2],
      e: "WSN được ứng dụng trong chống cháy rừng, an ninh chống đột nhập, sản xuất nông – công nghiệp, nhà thông minh, giao thông thông minh. BitTorrent là ứng dụng mạng ngang hàng."
    },
    {
      l: 2,
      q: "Trong mạng thông tin di động, vì sao vùng địa lý được chia thành nhiều ô (cell)?",
      o: [
        "Mỗi ô có trạm BTS riêng, tín hiệu được chuyển tiếp khi người dùng di chuyển",
        "Để mỗi người dùng có một đường cáp riêng nối thẳng tới tổng đài",
        "Để thay thế hoàn toàn cho mạng vệ tinh trên phạm vi toàn quốc",
        "Để các điện thoại giao tiếp trực tiếp với nhau, không cần trạm"
      ],
      e: "Mỗi ô có ít nhất một BTS; khi người dùng di chuyển qua các ô, tín hiệu được chuyển tiếp liên tục giữa các BTS nên cuộc gọi được chuyển vùng mà không mất."
    },
    {
      l: 2,
      q: "Theo khảo sát được nêu trong bài, lý do chính khiến phần lớn người tham gia chưa định dùng Starlink là gì?",
      o: [
        "Dịch vụ viễn thông mặt đất đã đáp ứng nhu cầu",
        "Starlink chưa được cấp phép tại Việt Nam",
        "Thiết bị Starlink không chịu được gió mạnh",
        "Starlink chỉ phục vụ khách hàng doanh nghiệp"
      ],
      e: "74% trong số 8.500 người tham gia không dự định dùng Starlink vì dịch vụ viễn thông mặt đất đã đáp ứng nhu cầu. Starlink đã được cấp phép (2/2026), thiết bị chịu gió trên 96 km/h và có gói Gia đình."
    },
    {
      l: 2,
      q: "Đặc điểm nào của Hub khiến hiệu suất mạng bị giảm?",
      o: [
        "Phát lại gói tin ra tất cả các cổng",
        "Ghi nhớ địa chỉ MAC ở từng cổng",
        "Chỉ phát gói tin tới cổng đích",
        "Cấp phát địa chỉ IP cho máy trạm"
      ],
      e: "Hub phát lại gói tin ra tất cả các cổng, không phân biệt cổng nào nên tăng xung đột, giảm hiệu suất. Ghi nhớ MAC và phát đúng cổng là ưu điểm của Switch."
    },
    {
      l: 2,
      q: "Những phát biểu nào đúng về mô hình mạng ngang hàng (Peer to Peer)? (Chọn tất cả đáp án đúng)",
      o: [
        "Không có sự hiện diện của server",
        "Hai máy người dùng giao tiếp trực tiếp",
        "Máy chủ hoạt động 24/7 phục vụ client",
        "Phần mềm thuộc sở hữu một nhà cung cấp"
      ],
      m: [0, 1],
      e: "P2P không có server, hai ứng dụng giao tiếp trực tiếp giữa hai PC và phần mềm không thuộc sở hữu của nhà cung cấp nào. Máy chủ 24/7 là đặc điểm của Client-Server."
    },
    {
      l: 2,
      q: "Trong lược đồ topo Star, đường cáp nối giữa các thiết bị trung tâm với nhau được gọi là gì?",
      o: ["Cáp backbone (trục chính)", "Cáp nhánh tới máy trạm", "Cáp chéo (cross over)", "Cáp đồng trục mảnh"],
      e: "Trong hình minh họa topo Star, các thiết bị trung tâm (Hub, Switch) được nối với nhau bằng cáp backbone; mỗi máy trạm có cáp nhánh riêng tới thiết bị trung tâm."
    },

    // ===== VẬN DỤNG (12) =====
    {
      l: 3,
      q: "Cơ quan A có 3 tầng, mỗi tầng 20 máy, cần mạng dễ bảo trì, một cáp hỏng không ảnh hưởng máy khác và hạn chế xung đột. Phương án nào hợp lý nhất?",
      o: [
        "Topo Star, mỗi tầng một Switch nối về Switch trung tâm",
        "Topo Bus với một đường cáp chạy qua cả ba tầng nhà",
        "Topo Ring nối trực tiếp từng máy thành một vòng tròn",
        "Mỗi tầng dùng một Hub nối thẳng tất cả các máy với nhau"
      ],
      e: "Star dễ bảo trì, một nhánh hỏng chỉ ảnh hưởng một máy; dùng Switch (không dùng Hub) để chỉ phát gói tới cổng đích, hạn chế xung đột; các Switch nối với nhau qua cáp backbone."
    },
    {
      l: 3,
      q: "Một quán cà phê đã có Modem và Router, muốn khách dùng điện thoại truy cập Internet mà không cần cắm dây. Cần bổ sung thiết bị nào?",
      o: [
        "Access Point phát sóng Wi-Fi",
        "Switch cung cấp thêm cổng LAN",
        "Hub phát gói tin ra mọi cổng",
        "Trạm BTS riêng của quán"
      ],
      e: "Access Point phát sóng Wi-Fi để kết nối điện thoại, laptop. Switch và Hub chỉ kết nối bằng cáp; BTS là hạ tầng của nhà mạng di động."
    },
    {
      l: 3,
      q: "Nhà bạn Lan có cáp quang, 2 máy tính bàn cắm dây và 3 điện thoại dùng Wi-Fi. Những chức năng thiết bị nào cần có (riêng lẻ hoặc tích hợp All-in-One)? (Chọn tất cả đáp án đúng)",
      o: ["Modem", "Access Point", "Switch", "Trạm BTS"],
      m: [0, 1, 2],
      e: "Cần Modem (chuyển tín hiệu quang → điện), Access Point (Wi-Fi cho điện thoại), Switch (cổng LAN cho máy bàn), cùng Router để ra Internet. Trạm BTS thuộc mạng di động, không lắp tại nhà."
    },
    {
      l: 3,
      q: "Một trường học muốn học sinh ở nhà truy cập kho học liệu đặt trong mạng nội bộ của trường một cách an toàn. Giải pháp phù hợp là gì?",
      o: ["VPN client to site", "VPN site to site", "Mạng cảm biến không dây", "Topo Bus mở rộng"],
      e: "Từng máy cá nhân ở xa truy cập vào LAN của trường là tình huống của VPN client to site. Site to site dùng khi nối nhiều mạng LAN (chi nhánh – trụ sở)."
    },
    {
      l: 3,
      q: "Hệ thống mạng nối các văn phòng của một tập đoàn đặt tại nhiều tỉnh thành, do tập đoàn quản lý, thuộc loại mạng nào?",
      o: ["WAN xí nghiệp (Enterprise WAN)", "WAN công cộng (Internet)", "MAN đô thị (MAN-E)", "LAN mở rộng nhiều tầng"],
      e: "Mạng diện rộng phục vụ riêng một doanh nghiệp, kết nối nhiều LAN ở nhiều tỉnh là WAN xí nghiệp. Internet là WAN công cộng; MAN chỉ trong phạm vi dưới 100 km."
    },
    {
      l: 3,
      q: "Một ứng dụng cho phép người dùng tải tệp trực tiếp từ máy của những người dùng khác, không qua máy chủ trung tâm. Ứng dụng này hoạt động theo mô hình nào?",
      o: ["Peer to Peer", "Client-Server", "Broadcast", "Token Ring"],
      e: "Hai máy người dùng giao tiếp trực tiếp, không qua server là mô hình ngang hàng (P2P), ví dụ BitTorrent."
    },
    {
      l: 3,
      q: "Bạn đặt hàng trên một website thương mại điện tử lúc 2 giờ sáng và đơn hàng vẫn được tiếp nhận ngay. Điều này thể hiện đặc điểm của mô hình nào?",
      o: [
        "Client-Server với máy chủ hoạt động 24/7",
        "Peer to Peer với máy người bán luôn bật",
        "Broadcast phát đơn hàng tới mọi máy",
        "Mạng cá nhân PAN của người mua hàng"
      ],
      e: "Server của trang thương mại điện tử luôn thường trực (24/7) để xử lý yêu cầu xem hàng, đặt hàng từ client – đặc trưng của mô hình Client-Server."
    },
    {
      l: 3,
      q: "Hệ thống loa phường phát thông báo cho cả khu dân cư cùng nghe một lúc minh họa cho phương thức truyền nào?",
      o: ["Broadcast", "Point-to-Point", "Client-Server", "Peer to Peer"],
      e: "Một nguồn phát, tất cả cùng nhận trên kênh chung là Broadcast. Loa đồng bộ (truyền giữa hai đầu phát – thu) mới là Point-to-Point."
    },
    {
      l: 3,
      q: "Nhà mạng nâng cấp vòng Core Switch kết nối các trạm trong thành phố từ 10 Gbps lên 50 Gbps. Đây là nâng cấp cho loại mạng nào?",
      o: ["MAN", "LAN", "PAN", "WSN"],
      e: "Ví dụ MAN-E của VNPT Hà Nội: các Core Switch nối thành vòng Ring 10 Gbps, kế hoạch nâng lên Ring 50 Gbps – đây là mạng đô thị (MAN)."
    },
    {
      l: 3,
      q: "Một học sinh liên tục nhận tin nhắn đe dọa, bôi nhọ trên mạng xã hội. Tình huống này thuộc nhóm vấn đề nào?",
      o: [
        "Mặt trái của mạng đối với người dùng",
        "Lợi ích chia sẻ tài nguyên phần mềm",
        "Hạn chế về tốc độ của mạng có dây",
        "Sự cố xung đột trên đường truyền Bus"
      ],
      e: "Bị bắt nạt qua mạng, tuyên truyền bôi nhọ danh dự cá nhân là các mặt trái của mạng đối với người dùng."
    },
    {
      l: 3,
      q: "Phòng thi trực tuyến yêu cầu tín hiệu ổn định, ít nhiễu và khó bị nghe trộm. Những lý do nào ủng hộ việc dùng mạng có dây? (Chọn tất cả đáp án đúng)",
      o: [
        "Tốc độ truyền nhanh hơn",
        "Tín hiệu ổn định, ít bị nhiễu",
        "Khó bị nghe trộm, phá sóng hơn",
        "Tiện lợi khi di chuyển chỗ ngồi"
      ],
      m: [0, 1, 2],
      e: "Mạng có dây nhanh hơn (Gbps), ổn định, ít nhiễu, khó bị nghe trộm/phá sóng hơn. Tiện lợi khi di chuyển là ưu điểm của mạng không dây."
    },
    {
      l: 3,
      q: "Một văn phòng 10 máy đang dùng Hub. Quản trị viên thay Hub bằng Switch. Những thay đổi nào sẽ xảy ra? (Chọn tất cả đáp án đúng)",
      o: [
        "Gói tin chỉ được phát tới cổng có máy đích",
        "Xung đột giữa các gói tin giảm đi",
        "Hiệu suất mạng được cải thiện",
        "Topo mạng chuyển từ Star sang Ring"
      ],
      m: [0, 1, 2],
      e: "Switch ghi nhớ MAC, chỉ phát gói tới cổng có thiết bị đích nên giảm xung đột, tăng hiệu suất. Topo vẫn là Star vì các máy vẫn nối về thiết bị trung tâm."
    }
  ]
});
