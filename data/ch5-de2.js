// Chương 5 – Đề 2 (40 câu, 12-16-12). Nạp sau data/ch5.js.
window.CHAPTERS.find((c) => c.id === 5).questions.push(
  // ===== NHẬN BIẾT (12) =====
  {
    l: 1,
    q: "Theo bài giảng, nhiệm vụ của tầng Mạng gồm những gì?",
    o: [
      "Tìm đường đi tốt nhất, thiết lập đường truyền tránh tắc nghẽn",
      "Chuyển gói tin tới đúng tiến trình ở tầng Ứng dụng",
      "Đóng gói frame và kiểm soát truy cập đường truyền",
      "Quy định hình dạng cáp và mức điện áp tín hiệu"
    ],
    e: "Tầng Mạng tìm đường đi tốt nhất, thiết lập đường truyền, tránh tắc nghẽn hay quá tải. Chuyển tới đúng tiến trình là tầng Giao vận; đóng gói frame là Data link; cáp, điện áp là tầng Vật lý."
  },
  {
    l: 1,
    q: "Thuật ngữ “hop” trong định tuyến có nghĩa là gì?",
    o: [
      "Mỗi lần gói tin được chuyển qua một router",
      "Mỗi lần gói tin bị mất trên đường truyền",
      "Thời gian gói tin đi hết chiều dài mạng",
      "Số byte dữ liệu chứa trong một gói tin"
    ],
    e: "Hop = bước nhảy; 1 hop = mỗi lần gói tin được chuyển qua một router."
  },
  {
    l: 1,
    q: "Trên Linux hoặc macOS, lệnh tương đương với tracert của Windows là gì?",
    o: ["traceroute", "ipconfig", "ping", "getmac"],
    e: "Để quan sát các hop: Windows dùng tracert, Linux/macOS dùng traceroute."
  },
  {
    l: 1,
    q: "Hệ thống tự trị AS (Autonomous System) là gì?",
    o: [
      "Một mạng lớn có chung một chính sách định tuyến",
      "Một router tự động cập nhật bảng định tuyến",
      "Một máy tính tự cấu hình địa chỉ IP",
      "Một thuật toán tìm đường ngắn nhất"
    ],
    e: "AS là mạng lớn có chung chính sách định tuyến, ví dụ mạng của một ISP (Viettel, VNPT…), tập đoàn đa quốc gia, cơ quan chính phủ."
  },
  {
    l: 1,
    q: "IPv4 được IETF công bố trong tài liệu nào, vào thời gian nào?",
    o: [
      "RFC 791, tháng 9/1981",
      "RFC 768, tháng 8/1980",
      "RFC 793, tháng 9/1981",
      "RFC 2460, năm 1998"
    ],
    e: "IPv4 được IETF công bố trong RFC 791 vào tháng 9/1981. RFC 768 là UDP, RFC 793 là TCP."
  },
  {
    l: 1,
    q: "Trường Version của gói tin IPv4 có giá trị nhị phân nào?",
    o: ["0100", "0110", "0001", "1111"],
    e: "Version (4 bit): IPv4 là 0100, IPv6 là 0110. Nếu khác phiên bản của thiết bị nhận, gói bị từ chối."
  },
  {
    l: 1,
    q: "Trong trường Type of Service, giá trị IP Precedence = 7 có ý nghĩa gì?",
    o: [
      "Gói tin kiểm soát mạng, mức ưu tiên cao nhất",
      "Gói tin bình thường, mức ưu tiên thấp nhất",
      "Gói tin yêu cầu độ trễ thấp nhất",
      "Gói tin không được phép phân mảnh"
    ],
    e: "IP Precedence từ 0 (bình thường) đến 7 (gói tin kiểm soát mạng, ưu tiên cao nhất)."
  },
  {
    l: 1,
    q: "Do trường Total Length dài 16 bit, độ dài tối đa của gói tin IPv4 là bao nhiêu?",
    o: ["64 KB", "1500 byte", "16 KB", "128 KB"],
    e: "Total Length 16 bit nên độ dài tối đa 2^16 = 64 KB. 1500 byte là kích thước gói tối đa thường gặp trên đường truyền (MTU)."
  },
  {
    l: 1,
    q: "Giao thức nào thường được dùng để tự động cấp phát địa chỉ IP cho các máy trạm?",
    o: ["DHCP", "ICMP", "BGP", "ARP"],
    e: "DHCP tự động cấp phát địa chỉ IP (động). ICMP dùng cho ping/tracert; BGP định tuyến giữa các AS; ARP ánh xạ IP sang MAC."
  },
  {
    l: 1,
    q: "Lệnh nào trên Windows dùng để xem địa chỉ IP của máy đang sử dụng?",
    o: ["ipconfig", "tracert", "ping", "nslookup"],
    e: "Gõ ipconfig tại Command Prompt để quan sát địa chỉ IP của máy."
  },
  {
    l: 1,
    q: "Những bộ nhớ nào có trong cấu tạo của router? (Chọn tất cả đáp án đúng)",
    o: ["ROM", "NVRAM", "Flash", "Ổ đĩa quang"],
    m: [0, 1, 2],
    e: "Router có CPU, ROM (POST, Bootstrap, Mini-IOS), RAM, NVRAM (file cấu hình), Flash (hệ điều hành), cổng giao tiếp. Không có ổ đĩa quang."
  },
  {
    l: 1,
    q: "Theo cách phân loại của Cisco, những loại router nào được nêu trong bài? (Chọn tất cả đáp án đúng)",
    o: ["Core router", "Edge router", "Virtual router", "Access Point router"],
    m: [0, 1, 2],
    e: "Cisco chia thành Core router, Edge router (Gateway router) và Virtual router; ngoài ra còn thuật ngữ Distribution router. Access Point là thiết bị tầng Data link."
  },

  // ===== THÔNG HIỂU (16) =====
  {
    l: 2,
    q: "Phát biểu nào đúng về tiêu chí đánh giá tuyến đường trong định tuyến?",
    o: [
      "Không bất biến, có thể do người quản trị hay thiết kế mạng đặt ra",
      "Luôn cố định là số router trung gian ít nhất",
      "Chỉ dựa vào khoảng cách địa lý giữa hai trạm",
      "Do người dùng cuối tự chọn cho từng gói tin"
    ],
    e: "Tiêu chí không bất biến, tùy thực tế, có thể do người quản trị đặt ra: cước phí, thời gian truyền, độ an toàn, số hop…"
  },
  {
    l: 2,
    q: "Lệnh tracert khám phá các hop trên đường tới đích bằng cách nào?",
    o: [
      "Gửi nhiều gói echo ICMP, mỗi lần tăng dần TTL",
      "Gửi một gói TCP SYN rồi đợi server trả lời",
      "Hỏi Root Name Server danh sách các router",
      "Đọc bảng định tuyến lưu trong router gia đình"
    ],
    e: "tracert gửi nhiều lần gói echo qua ICMP, mỗi lần tăng dần TTL để mở rộng phạm vi khám phá cho tới khi tới được đích."
  },
  {
    l: 2,
    q: "Nguyên tắc tối ưu trong định tuyến phát biểu như thế nào?",
    o: [
      "Nếu J nằm trên đường tối ưu từ I tới K thì đoạn J tới K cũng tối ưu",
      "Đường đi tối ưu luôn đi qua ít router nhất có thể",
      "Mỗi điểm đích chỉ có duy nhất một cây đường đi tối ưu",
      "Đường đi tối ưu từ I tới K luôn trùng đường từ K tới I"
    ],
    e: "Nếu router J nằm trên tuyến tối ưu từ I tới K thì đoạn J→K dọc tuyến đó cũng tối ưu. Hệ quả là sink-tree, và cây này không nhất thiết duy nhất."
  },
  {
    l: 2,
    q: "Điểm khác nhau giữa tìm đường tập trung và tìm đường phân tán là gì?",
    o: [
      "Tập trung có trung tâm tính đường cho cả mạng; phân tán thì mỗi router tự tìm",
      "Tập trung để mỗi router tự tìm; phân tán có một trung tâm tính đường",
      "Tập trung chỉ dùng cho mạng không dây; phân tán cho mạng có dây",
      "Tập trung không cần thông tin về mạng; phân tán cần đầy đủ"
    ],
    e: "Tìm đường tập trung: Trung tâm điều khiển mạng tính toán và cập nhật cho toàn mạng. Phân tán: mỗi router tự tìm đường và trao đổi thông tin với nhau."
  },
  {
    l: 2,
    q: "Vì sao thuật toán Dijkstra được xếp vào kiểu định tuyến Link State?",
    o: [
      "Vì cần thông tin toàn mạng để tìm đỉnh có nhãn nhỏ nhất",
      "Vì các router chỉ trao đổi thông tin với hàng xóm",
      "Vì các router cập nhật theo chu kỳ vài chục giây",
      "Vì mỗi nút chỉ biết nút kế tiếp trên đường đi"
    ],
    e: "Bước tìm u có d[u] = min{d[z]} cho thấy thuật toán có thông tin về toàn bộ các nút – đặc trưng của Link State. Trao đổi với hàng xóm theo chu kỳ là Distance Vector."
  },
  {
    l: 2,
    q: "Trong giao thức Distance Vector, mỗi nút biết được gì về đường tới đích?",
    o: [
      "Chỉ biết nút kế tiếp, không biết toàn bộ đường đi",
      "Biết toàn bộ topo và trọng số của mọi liên kết",
      "Không biết gì, gửi ngẫu nhiên tới hàng xóm",
      "Biết đường đi do trung tâm điều khiển gửi xuống"
    ],
    e: "Với DV, mạng quá rộng nên không nút nào có thông tin đầy đủ; mỗi nút không biết đường đi tới đích mà chỉ biết nút kế tiếp."
  },
  {
    l: 2,
    q: "Những nguyên nhân nào có thể gây ra tắc nghẽn mạng? (Chọn tất cả đáp án đúng)",
    o: [
      "Một trạm đột nhiên trở thành trung tâm chú ý",
      "Một thiết bị có bộ xử lý kém hơn phần còn lại",
      "Hỏng hóc thiết bị hay phá hoại cố ý",
      "Mạng chuyển từ IPv4 sang dùng IPv6"
    ],
    m: [0, 1, 2],
    e: "Nguyên nhân tắc nghẽn: một trạm đột nhiên thành trung tâm chú ý; thiết bị kém hiệu suất thành nút thắt cổ chai; hỏng hóc hay phá hoại cố ý."
  },
  {
    l: 2,
    q: "Hiện tượng “thắt cổ chai” (bottle-neck) trong mạng được hiểu là gì?",
    o: [
      "Một thiết bị hoạt động kém kéo hiệu suất chung của hệ thống xuống",
      "Gói tin bị lặp vòng vô hạn giữa hai router",
      "Hai tín hiệu cùng lúc trên một đường truyền làm hỏng nhau",
      "Gói tin có TTL bằng 0 bị router hủy bỏ"
    ],
    e: "Thắt cổ chai: một bộ phận, thiết bị hoạt động kém hiệu quả kéo hiệu suất chung của cả hệ thống hạ xuống theo."
  },
  {
    l: 2,
    q: "Cơ chế Token Bucket khác Leaky Bucket ở điểm nào?",
    o: [
      "Xô chứa token được sinh đều đặn thay vì chứa gói tin",
      "Lưu lượng ra luôn bằng đúng lưu lượng vào",
      "Xô chứa gói tin và nhỏ giọt ra với tốc độ cố định",
      "Không giới hạn lượng dữ liệu được gửi đi"
    ],
    e: "Token Bucket: xô không chứa gói tin mà chứa token (thẻ truyền tin) sinh ra đều đặn sau một khoảng thời gian. Leaky Bucket chứa gói và cho ra với lưu lượng không đổi."
  },
  {
    l: 2,
    q: "Vì sao mọi mảnh của một gói tin IP bị phân mảnh phải có cùng giá trị Identification?",
    o: [
      "Để bên nhận ghép đúng các mảnh lại thành gói ban đầu",
      "Để router chọn cùng một đường đi cho các mảnh",
      "Để các mảnh có cùng mức ưu tiên khi truyền",
      "Để tính checksum chung cho tất cả các mảnh"
    ],
    e: "Identification là số định danh gói; các mảnh cùng định danh để bên nhận nhận biết và ghép lại (kết hợp Offset và cờ MF)."
  },
  {
    l: 2,
    q: "Tùy chọn (Option) Source route trong IP Header có tác dụng gì?",
    o: [
      "Bắt buộc gói tin đi qua những router nhất định",
      "Ghi lại thời điểm gói đi qua từng router",
      "Lưu danh sách địa chỉ các router đã đi qua",
      "Kiểm tra router có được phép nhận gói không"
    ],
    e: "Source route: bắt buộc đi qua router nào đó (không cần bảng định tuyến). Time stamp ghi thời điểm; Record router lưu danh sách; Security kiểm tra quyền nhận."
  },
  {
    l: 2,
    q: "Trường Padding trong IPv4 Header dùng để làm gì?",
    o: [
      "Đảm bảo độ dài header luôn là bội số của 32 bit",
      "Đánh dấu điểm bắt đầu của phần dữ liệu",
      "Chứa mã kiểm soát lỗi cho phần header",
      "Lưu mức ưu tiên của gói tin khi truyền"
    ],
    e: "Padding là vùng đệm có độ dài thay đổi, bảo đảm header luôn là bội số của 32 bit (vì Options có độ dài thay đổi)."
  },
  {
    l: 2,
    q: "Phân biệt “địa chỉ mạng” với “Host ID”, phát biểu nào đúng?",
    o: [
      "Host ID là một phần địa chỉ IP; địa chỉ mạng là địa chỉ có Host ID toàn bit 0",
      "Host ID và địa chỉ mạng là hai tên gọi khác nhau của cùng một khái niệm",
      "Địa chỉ mạng là phần Host ID có toàn bộ các bit bằng 1",
      "Host ID là địa chỉ của router, địa chỉ mạng là địa chỉ của máy trạm"
    ],
    e: "Host ID chỉ là một phần của địa chỉ IP; địa chỉ mạng là một địa chỉ đầy đủ có phần Host ID gồm toàn bit 0 (không gán cho trạm nào)."
  },
  {
    l: 2,
    q: "Một người muốn gửi một video clip tới một nhóm bạn ở nhiều mạng con khác nhau mà không gửi lặp nhiều lần. Dạng địa chỉ nào phù hợp?",
    o: ["Multicast", "Unicast", "Broadcast", "Loopback"],
    e: "Unicast phải gửi nhiều lần cho từng người; broadcast có thể tới người không liên quan và không ra khỏi mạng con; multicast gửi tới nhóm trạm xác định ở nhiều mạng con."
  },
  {
    l: 2,
    q: "Đặc điểm nào là hạn chế của NAT động (Dynamic NAT)?",
    o: [
      "Máy bên ngoài chủ động kết nối vào máy nội bộ có thể không được đáp ứng",
      "Không giải quyết được vấn đề thiếu hụt địa chỉ công khai",
      "Mỗi địa chỉ riêng được gán cố định vĩnh viễn một địa chỉ công khai",
      "Phải sửa toàn bộ phần dữ liệu bên trong gói tin"
    ],
    e: "NAT động chỉ đưa địa chỉ riêng vào bảng NAT khi có yêu cầu kết nối; máy ngoài chủ động kết nối vào máy nội bộ có thể không được đáp ứng nếu máy đó chưa đến lượt."
  },
  {
    l: 2,
    q: "Vì sao IPv6 không cần dùng Subnet mask?",
    o: [
      "Độ dài Network Prefix và Interface ID cố định là 64 bit",
      "IPv6 không phân biệt phần mạng và phần máy",
      "IPv6 chỉ dùng địa chỉ Multicast cho mọi gói tin",
      "Router IPv6 tự đoán phần mạng của mỗi địa chỉ"
    ],
    e: "Địa chỉ IPv6 gồm Network Prefix (64 bit) và Interface ID (64 bit) có độ dài cố định nên không cần Subnet mask."
  },

  // ===== VẬN DỤNG (12) =====
  {
    l: 3,
    q: "Cho địa chỉ IP 10.20.30.40 dùng Subnet mask mặc định của lớp. Địa chỉ mạng là gì?",
    o: ["10.0.0.0", "10.20.0.0", "10.20.30.0", "10.255.255.255"],
    e: "10.x.x.x thuộc lớp A, mask mặc định 255.0.0.0 → địa chỉ mạng 10.0.0.0. 10.255.255.255 là địa chỉ broadcast."
  },
  {
    l: 3,
    q: "Địa chỉ quảng bá (broadcast) của mạng chứa máy 172.18.5.9 với mask mặc định là gì?",
    o: ["172.18.255.255", "172.18.5.255", "172.255.255.255", "172.18.0.0"],
    e: "172.x thuộc lớp B (/16), Host ID là hai octet cuối; đặt toàn bit 1 được 172.18.255.255. 172.18.0.0 là địa chỉ mạng."
  },
  {
    l: 3,
    q: "Gói IP dài 3200 byte (20 byte header) đi qua đường truyền chỉ cho phép tối đa 1500 byte. Mảnh thứ ba có Total length và Offset lần lượt là bao nhiêu?",
    o: [
      "240 byte, Offset 2960",
      "220 byte, Offset 2960",
      "240 byte, Offset 2940",
      "1500 byte, Offset 2960"
    ],
    e: "Data = 3180 byte, mỗi mảnh chở tối đa 1480 → 1480, 1480, 220. Mảnh 3: 220 + 20 header = 240 byte; Offset = 1480 × 2 = 2960."
  },
  {
    l: 3,
    q: "Mạng có các cạnh: A–B = 2, A–C = 5, B–C = 1, B–D = 7, C–D = 2, C–E = 6, D–E = 1. Theo Dijkstra, đường đi ngắn nhất từ A tới E dài bao nhiêu?",
    o: [
      "6 (A–B–C–D–E)",
      "8 (A–C–D–E)",
      "9 (A–B–C–E)",
      "4 (A–B–C–D–E)"
    ],
    e: "A–B–C–D–E = 2 + 1 + 2 + 1 = 6 là nhỏ nhất (A–C–D–E = 8, A–B–C–E = 9). “4” là nhầm số hop với tổng trọng số."
  },
  {
    l: 3,
    q: "Máy 192.168.10.77/24 muốn gửi gói tin tới máy 192.168.10.200. Máy gửi sẽ làm gì?",
    o: [
      "Cùng mạng: gửi ARP lấy MAC rồi gửi trực tiếp qua switch",
      "Khác mạng: gửi gói tới default gateway là router",
      "Gửi broadcast tới toàn bộ Internet",
      "Hủy gói vì 200 lớn hơn 77"
    ],
    e: "192.168.10.200 AND 255.255.255.0 = 192.168.10.0, trùng mạng của máy gửi → dùng ARP lấy MAC và gửi trực tiếp, không qua router."
  },
  {
    l: 3,
    q: "Địa chỉ nào sau đây <b>KHÔNG</b> thể gán cho một máy trạm trong mạng 192.168.1.0/24?",
    o: ["192.168.1.255", "192.168.1.1", "192.168.1.100", "192.168.1.254"],
    e: "192.168.1.255 có Host ID toàn bit 1 – là địa chỉ quảng bá, chỉ dùng làm địa chỉ đích, không gán cho trạm."
  },
  {
    l: 3,
    q: "Theo cách chia lớp truyền thống, một tổ chức cần một mạng chứa khoảng 50.000 máy. Lớp địa chỉ nhỏ nhất đáp ứng được là lớp nào?",
    o: ["Lớp B", "Lớp C", "Lớp A", "Lớp D"],
    e: "Lớp C tối đa 254 máy/mạng – không đủ; lớp B tối đa 65.534 máy – đủ; lớp A quá lớn gây lãng phí; lớp D dùng cho multicast."
  },
  {
    l: 3,
    q: "Viết gọn địa chỉ IPv6 FE80:0000:0000:0000:0202:B3FF:FE1E:8329 theo đúng quy tắc.",
    o: [
      "FE80::202:B3FF:FE1E:8329",
      "FE80:202:B3FF:FE1E:8329",
      "FE80::202::B3FF:FE1E:8329",
      "FE8::202:B3FF:FE1E:8329"
    ],
    e: "Thay dãy cụm 0000 liên tiếp bằng “::” (một lần) và bỏ số 0 đứng đầu (0202 → 202). Không được bỏ số 0 ở cuối cụm (FE80 ≠ FE8)."
  },
  {
    l: 3,
    q: "Địa chỉ IPv6 2001:DB8::1 thuộc loại địa chỉ nào?",
    o: [
      "Global Unicast (2000::/3)",
      "Link-Local (fe80::/10)",
      "Unique Local (fc00::/7)",
      "Multicast (ff00::/8)"
    ],
    e: "Địa chỉ bắt đầu bằng 2001 thuộc tiền tố 2000::/3 – Global Unicast Address, định tuyến được trên Internet."
  },
  {
    l: 3,
    q: "Một doanh nghiệp đặt cho các máy nội bộ địa chỉ IPv6 dạng fd12:3456::/64, không định tuyến ra Internet. Đây là loại địa chỉ nào?",
    o: [
      "Unique Local Address (ULA)",
      "Global Unicast Address (GUA)",
      "Link-Local Address",
      "Loopback Address"
    ],
    e: "ULA bắt đầu bằng fc00::/7 hoặc fd00::/7, dùng trong mạng nội bộ riêng (tương tự 10.x.x.x hay 192.168.x.x của IPv4)."
  },
  {
    l: 3,
    q: "Router nhận một gói có TTL = 5, checksum đúng, kích thước lớn hơn mức cho phép của cổng ra và cờ DF = 0. Router sẽ thực hiện những việc nào? (Chọn tất cả đáp án đúng)",
    o: [
      "Giảm TTL xuống 4",
      "Phân mảnh gói tin",
      "Tạo lại header với TTL, checksum mới",
      "Hủy gói vì kích thước quá lớn"
    ],
    m: [0, 1, 2],
    e: "Router giảm TTL, chọn đường, phân mảnh nếu cần (DF = 0 cho phép), rồi tạo lại header cho các mảnh với TTL, Fragmentation, Checksum mới. Gói không bị hủy."
  },
  {
    l: 3,
    q: "Công ty có một Web server nội bộ cần được truy cập từ Internet, và 100 máy nhân viên chỉ cần ra Internet, trong khi chỉ có ít IP công khai. Những lựa chọn nào phù hợp? (Chọn tất cả đáp án đúng)",
    o: [
      "NAT tĩnh cho Web server",
      "NAT overload cho máy nhân viên",
      "NAT tĩnh cho toàn bộ 100 máy",
      "Gán thẳng IP riêng ra Internet"
    ],
    m: [0, 1],
    e: "NAT tĩnh hữu ích cho máy cần địa chỉ cố định để truy cập từ ngoài (Web server); NAT overload ẩn nhiều máy sau ít IP công khai. NAT tĩnh cho 100 máy cần 100 IP công khai."
  }
);
