window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 5,
  title: "Tầng Mạng",
  topics: "Định tuyến · Dijkstra · LS/DV · Tắc nghẽn · IPv4 · Subnet mask · NAT · IPv6 · Router",
  questions: [
    // ===== NHẬN BIẾT (12) =====
    {
      l: 1,
      q: "Đơn vị dữ liệu của tầng Mạng được gọi là gì?",
      o: ["Datagram (packet)", "Segment (đoạn tin)", "Frame (khung tin)", "Message (thông điệp)"],
      e: "Đơn vị dữ liệu của tầng Mạng là datagram hay packet. Segment thuộc tầng Giao vận, frame thuộc tầng Data link."
    },
    {
      l: 1,
      q: "Chức năng quan trọng nhất của tầng Mạng là gì?",
      o: [
        "Định tuyến (routing)",
        "Dồn kênh và phân kênh",
        "Tách khung tin (framing)",
        "Mã hóa tín hiệu đường truyền"
      ],
      e: "Định tuyến – tìm kiếm, lựa chọn con đường tốt nhất để truyền datagram tới trạm thu – là chức năng quan trọng nhất của tầng Mạng."
    },
    {
      l: 1,
      q: "Thuật toán Dijkstra được công bố năm nào và có độ phức tạp bao nhiêu?",
      o: [
        "Năm 1959, độ phức tạp O(n²)",
        "Năm 1959, độ phức tạp O(n)",
        "Năm 1974, độ phức tạp O(n²)",
        "Năm 1974, độ phức tạp O(n log n)"
      ],
      e: "Dijkstra công bố năm 1959, độ phức tạp O(n²) với n là số đỉnh; giả thiết trọng số không âm. (1974 là năm ra đời TCP/IP.)"
    },
    {
      l: 1,
      q: "Theo bài giảng, giao thức RIP giới hạn số hop tối đa là bao nhiêu?",
      o: ["15 hop", "255 hop", "100 hop", "64 hop"],
      e: "Distance Vector bị giới hạn số hop: RIP tối đa 15; IGRP tối đa 255, mặc định 100."
    },
    {
      l: 1,
      q: "Giao thức BGP dùng để định tuyến ở phạm vi nào?",
      o: [
        "Giữa các hệ thống tự trị (AS)",
        "Bên trong một mạng LAN nhỏ",
        "Bên trong một AS duy nhất",
        "Giữa các cổng của một Switch"
      ],
      e: "BGP (Border Gateway Protocol) định tuyến giữa các AS (quy mô toàn cầu); bên trong mỗi AS dùng giao thức nội vùng như OSPF, RIP, EIGRP."
    },
    {
      l: 1,
      q: "Lệnh ping và tracert hoạt động dựa trên giao thức nào?",
      o: ["ICMP", "ARP", "DHCP", "BGP"],
      e: "ICMP (thuộc tầng Mạng) dùng để báo lỗi, kiểm tra kết nối và hỗ trợ công cụ chẩn đoán như ping, tracert."
    },
    {
      l: 1,
      q: "Địa chỉ IPv4 và IPv6 lần lượt dài bao nhiêu bit?",
      o: [
        "32 bit và 128 bit",
        "32 bit và 64 bit",
        "64 bit và 128 bit",
        "16 bit và 128 bit"
      ],
      e: "IPv4 dài 32 bit (~4,3 tỷ địa chỉ); IPv6 dài 128 bit (Network Prefix 64 bit + Interface ID 64 bit)."
    },
    {
      l: 1,
      q: "Trong IP Header, trường Protocol có giá trị 6 cho biết giao thức tầng trên là gì?",
      o: ["TCP", "UDP", "ICMP", "IP"],
      e: "Trường Protocol: TCP có mã 6, UDP là 17, ICMP là 1."
    },
    {
      l: 1,
      q: "Lớp D (224.0.0.0 – 239.255.255.255) được dùng cho mục đích gì?",
      o: [
        "Địa chỉ multicast",
        "Địa chỉ dự phòng",
        "Địa chỉ loopback",
        "Địa chỉ quảng bá"
      ],
      e: "Lớp D dùng làm địa chỉ multicast (ví dụ 224.0.0.5 cho OSPF). Lớp E (240–255) dùng cho mục đích dự phòng."
    },
    {
      l: 1,
      q: "Địa chỉ loopback dùng để tự kiểm tra trong IPv4 và IPv6 lần lượt là gì?",
      o: [
        "127.0.0.1 và ::1",
        "0.0.0.0 và ::",
        "255.255.255.255 và ff00::",
        "192.168.1.1 và fe80::1"
      ],
      e: "Loopback IPv4 là 127.x.y.z (thường 127.0.0.1); IPv6 là ::1. ff00:: là tiền tố multicast, fe80:: là link-local."
    },
    {
      l: 1,
      q: "Header của gói tin IPv6 có độ dài như thế nào?",
      o: [
        "Cố định 40 byte",
        "Thay đổi 20 – 60 byte",
        "Cố định 20 byte",
        "Cố định 128 byte"
      ],
      e: "Header IPv6 cố định 40 byte nên không cần trường IHL. Header IPv4 bình thường 20 byte và thay đổi được do có Options."
    },
    {
      l: 1,
      q: "Thứ tự phân cấp quản lý địa chỉ IP tại Việt Nam là gì?",
      o: [
        "IANA → APNIC → VNNIC → ISP → người dùng",
        "APNIC → IANA → VNNIC → ISP → người dùng",
        "IANA → VNNIC → APNIC → ISP → người dùng",
        "VNNIC → APNIC → IANA → ISP → người dùng"
      ],
      e: "IANA (toàn cầu) → APNIC (khu vực Châu Á – Thái Bình Dương) → VNNIC (Việt Nam) → ISP → EndUser."
    },

    // ===== THÔNG HIỂU (16) =====
    {
      l: 2,
      q: "Vì sao router cần dịch vụ Lưu trữ và chuyển tiếp (Store and Forward)?",
      o: [
        "Kiểm tra checksum và tìm đường tốn thời gian nên phải lưu tạm gói",
        "Gói tin luôn chạy thẳng một mạch từ trạm gửi tới trạm nhận",
        "Router cần lưu vĩnh viễn gói tin để đối chiếu về sau",
        "Router phải chờ đủ tất cả các gói rồi mới gửi đi một lần"
      ],
      e: "Router kiểm tra checksum rồi chạy thuật toán tìm đường; việc này tốn thời gian nên gói tin được lưu tạm trong buffer trước khi chuyển tới router tiếp theo."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về giao thức IP?",
      o: [
        "Là giao thức phi kết nối, không đảm bảo độ tin cậy",
        "Là giao thức hướng kết nối, thiết lập mạch ảo trước",
        "Đảm bảo gói tin không lỗi, không mất, đúng thứ tự",
        "Chỉ hoạt động trên thiết bị đầu cuối như tầng Giao vận"
      ],
      e: "IP là giao thức mạng phi kết nối, không chịu trách nhiệm về gói lỗi, thất lạc, sai thứ tự; việc đảm bảo tin cậy do tầng Giao vận (TCP) làm."
    },
    {
      l: 2,
      q: "Định tuyến không thích nghi (định tuyến tĩnh) có đặc điểm gì?",
      o: [
        "Router không tự cập nhật đường đi khi mạng thay đổi",
        "Router tự động cập nhật đường đi khi topo mạng thay đổi",
        "Các router trao đổi thông tin định kỳ với hàng xóm",
        "Tuyến đường được điều chỉnh liên tục theo lưu lượng"
      ],
      e: "Định tuyến tĩnh: tuyến đường được tải xuống router từ khi khởi động, không dựa trên phép đo lưu lượng hay topo hiện thời, router không tự cập nhật khi mạng thay đổi."
    },
    {
      l: 2,
      q: "So sánh Link State và Distance Vector, phát biểu nào đúng?",
      o: [
        "LS chỉ cập nhật khi mạng thay đổi, DV cập nhật theo chu kỳ",
        "LS cập nhật theo chu kỳ, DV chỉ cập nhật khi mạng thay đổi",
        "DV hội tụ nhanh hơn và ít tốn băng thông hơn LS",
        "Mỗi nút trong DV có thông tin đầy đủ về toàn mạng"
      ],
      e: "DV trao đổi thông tin theo chu kỳ (vài chục giây), LS chỉ khi mạng thay đổi. DV hội tụ lâu, tốn băng thông; mỗi nút DV chỉ biết nút kế tiếp."
    },
    {
      l: 2,
      q: "Vì sao hiện tượng Loop (lặp vòng) thường xảy ra với giao thức Distance Vector?",
      o: [
        "Router cập nhật định kỳ nên không được báo ngay khi có sự cố",
        "Router cập nhật ngay lập tức nên thông tin bị chồng chéo",
        "Router lưu thông tin toàn mạng tại một trung tâm tính toán",
        "Router không sử dụng bảng định tuyến khi gửi gói tin"
      ],
      e: "DV cập nhật định kỳ nên router không được thông báo ngay khi sự cố xảy ra mà phải chờ chu kỳ tiếp theo → hình thành Loop. Link State cập nhật ngay nên không bị Loop."
    },
    {
      l: 2,
      q: "Cơ chế Split Horizon chống Loop bằng cách nào?",
      o: [
        "Không gửi lại thông tin cập nhật ra cổng mà thông tin đó đã đến",
        "Gửi thông tin cập nhật ra tất cả các cổng ngay lập tức",
        "Tăng số hop tối đa để gói tin đi được xa hơn",
        "Xóa toàn bộ bảng định tuyến khi phát hiện sự cố"
      ],
      e: "Split Horizon: router không được gửi lại thông tin cập nhật về cổng mà từ đó thông tin đã được gửi tới."
    },
    {
      l: 2,
      q: "Cơ chế Leaky Bucket kiểm soát tắc nghẽn như thế nào?",
      o: [
        "Lưu lượng vào có thể biến đổi nhưng lưu lượng ra giữ không đổi",
        "Lưu lượng ra thay đổi theo đúng lượng dữ liệu đi vào",
        "Xô chứa các token được sinh ra đều đặn theo thời gian",
        "Hủy toàn bộ gói tin khi lưu lượng vào tăng đột biến"
      ],
      e: "Leaky Bucket như xô thủng đáy: nước vào biến đổi nhưng nước ra không đổi, tùy kích thước lỗ thủng. Xô chứa token là cơ chế Token Bucket."
    },
    {
      l: 2,
      q: "Khi nhận được một gói tin IP, router xử lý theo thứ tự nào?",
      o: [
        "Tính checksum → giảm TTL → chọn đường → phân mảnh nếu cần",
        "Chọn đường → tính checksum → tăng TTL → phân mảnh nếu cần",
        "Giảm TTL → phân mảnh → tính checksum → ghép các mảnh",
        "Ghép các mảnh → tính checksum → chuyển lên tầng trên"
      ],
      e: "Router: tính checksum (sai thì hủy) → giảm TTL (bằng 0 thì hủy) → chọn đường → phân mảnh nếu cần → tạo lại header. Ghép mảnh là việc của trạm đích."
    },
    {
      l: 2,
      q: "Trong IP Header, ý nghĩa của bit DF = 1 là gì?",
      o: [
        "Không được phép phân mảnh gói tin",
        "Còn các mảnh tiếp theo của gói tin",
        "Đây là mảnh cuối cùng của gói tin",
        "Gói tin yêu cầu độ trễ thấp nhất"
      ],
      e: "DF (Don't Fragment) = 1: không được phân mảnh. MF (More Fragment) = 1: còn mảnh tiếp theo; MF = 0: mảnh cuối hoặc không phân mảnh."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về địa chỉ quảng bá (broadcast) trong IPv4?",
      o: [
        "Phần Host ID toàn bit 1, chỉ dùng làm địa chỉ đích",
        "Phần Host ID toàn bit 0, dùng làm địa chỉ nguồn",
        "Byte đầu là 127, gói tin không rời khỏi máy",
        "Gửi tới một nhóm trạm ở nhiều mạng con khác nhau"
      ],
      e: "Broadcast: Host ID toàn 1, gửi tới mọi trạm trong mạng con, chỉ dùng làm địa chỉ đích. Host ID toàn 0 là địa chỉ mạng; 127.x.y.z là loopback; gửi nhóm là multicast."
    },
    {
      l: 2,
      q: "Đâu <b>KHÔNG</b> phải là ưu điểm của IPv6 so với IPv4?",
      o: [
        "Địa chỉ ngắn, đơn giản, dễ nhớ hơn",
        "Không gian địa chỉ lớn, dễ quản lý",
        "Tự cấu hình không cần máy chủ DHCP",
        "Hỗ trợ tốt hơn cho thiết bị di động"
      ],
      e: "Địa chỉ IPv4 mới đơn giản, dễ nhớ (đó là một lý do chuyển đổi sang IPv6 chậm). IPv6 dài 128 bit, khó nhớ hơn."
    },
    {
      l: 2,
      q: "Vì sao IPv6 loại bỏ trường Header checksum?",
      o: [
        "Lớp TCP phía trên đã có checksum; bỏ đi giúp truyền nhanh hơn",
        "Gói tin IPv6 không bao giờ bị lỗi trên đường truyền",
        "Router IPv6 dùng địa chỉ MAC để thay thế cho checksum",
        "Header IPv6 quá ngắn nên không chứa được trường checksum"
      ],
      e: "Header checksum không thật sự cần thiết vì lớp TCP phía trên cũng có checksum, hơn nữa việc tính checksum ở mỗi router làm chậm tốc độ truyền."
    },
    {
      l: 2,
      q: "Hạn chế của NAT tĩnh (Static NAT) là gì?",
      o: [
        "Không giải quyết được khi số IP công khai ít hơn số máy",
        "Không cho máy bên ngoài truy cập Web server nội bộ",
        "Phải sửa toàn bộ phần dữ liệu bên trong gói tin",
        "Không tạo được bảng NAT để ghi quy tắc chuyển đổi"
      ],
      e: "NAT tĩnh ánh xạ một-một nên không giải quyết được khi số IP chính thức nhỏ hơn số máy nội bộ. NAT tĩnh hữu ích cho Web/Mail server và chỉ sửa địa chỉ IP, checksum trong header."
    },
    {
      l: 2,
      q: "Trong IPv6, phát biểu nào đúng về cơ chế truyền tin?",
      o: [
        "Không dùng Broadcast, thay bằng Multicast",
        "Vẫn dùng Broadcast giống hệt như IPv4",
        "Chỉ dùng Unicast, bỏ hẳn Multicast",
        "Dùng địa chỉ Multicast làm địa chỉ nguồn"
      ],
      e: "IPv6 không dùng Broadcast mà dùng Unicast, Multicast, Anycast. Địa chỉ multicast luôn là địa chỉ đích, không bao giờ là địa chỉ nguồn."
    },
    {
      l: 2,
      q: "Trong cấu tạo router, bộ nhớ nào lưu file cấu hình và vẫn giữ dữ liệu khi tắt nguồn?",
      o: ["NVRAM", "RAM", "ROM", "Cache"],
      e: "NVRAM (non-volatile RAM) giữ dữ liệu sau khi tắt nguồn nên lưu file cấu hình. RAM lưu bảng định tuyến tạm thời; Flash lưu hệ điều hành; ROM chứa POST, Bootstrap."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về giao thức BGP?",
      o: [
        "Định tuyến theo chính sách, thuộc loại Path Vector và dùng TCP",
        "Chỉ tìm đường ngắn nhất theo hop-count giống như RIP",
        "Thuộc loại Link State và chạy trên giao thức UDP",
        "Dùng bên trong một AS để thay thế cho OSPF"
      ],
      e: "BGP định tuyến dựa trên chính sách và quy luật, thuộc loại Path Vector Protocol, sử dụng TCP (nằm ở tầng Application của TCP/IP)."
    },

    // ===== VẬN DỤNG (12) =====
    {
      l: 3,
      q: "Địa chỉ IP 172.16.1.1 thuộc lớp nào?",
      o: ["Lớp B", "Lớp A", "Lớp C", "Lớp D"],
      e: "Octet đầu 172 nằm trong khoảng 128–191 nên thuộc lớp B (bit nhận dạng 10)."
    },
    {
      l: 3,
      q: "Cho địa chỉ IP 198.53.147.45 với Subnet mask 255.255.255.0. Địa chỉ mạng là gì?",
      o: ["198.53.147.0", "198.53.0.0", "198.53.147.255", "0.0.0.45"],
      e: "Network Address = IP AND Subnet mask = 198.53.147.0. 198.53.147.255 là địa chỉ broadcast; 0.0.0.45 là phần Host ID."
    },
    {
      l: 3,
      q: "Host A có IP 10.0.0.1/24 muốn gửi gói tin tới host C có IP 10.1.1.1. Host A sẽ làm gì?",
      o: [
        "Gửi gói tin tới default gateway (router)",
        "Gửi ARP lấy MAC của C rồi gửi trực tiếp",
        "Gửi broadcast tới toàn mạng 10.0.0.0",
        "Hủy gói tin vì C nằm ở mạng khác"
      ],
      e: "10.1.1.1 AND 255.255.255.0 = 10.1.1.0 ≠ 10.0.0.0 nên C ở mạng khác → A gửi gói tới default gateway. Gửi ARP trực tiếp chỉ áp dụng khi đích cùng mạng."
    },
    {
      l: 3,
      q: "Địa chỉ quảng bá (broadcast) của mạng 192.168.3.0/24 là gì?",
      o: ["192.168.3.255", "192.168.255.255", "192.168.3.0", "255.255.255.0"],
      e: "Với /24, Host ID là octet cuối; đặt toàn bit 1 được 192.168.3.255. 192.168.3.0 là địa chỉ mạng; 255.255.255.0 là subnet mask."
    },
    {
      l: 3,
      q: "Một gói tin IP dài 2500 byte (20 byte header) đi qua đường truyền chỉ cho phép tối đa 1500 byte. Mảnh thứ hai có Total length và cờ MF lần lượt là bao nhiêu?",
      o: [
        "1020 byte, MF = 0",
        "1000 byte, MF = 0",
        "1020 byte, MF = 1",
        "1000 byte, MF = 1"
      ],
      e: "Data = 2480 byte, mỗi mảnh chở tối đa 1480 byte data → mảnh 2 chở 1000 byte data + 20 byte header = 1020 byte. Đây là mảnh cuối nên MF = 0."
    },
    {
      l: 3,
      q: "Viết gọn địa chỉ IPv6 2001:0DB8:0000:0000:0000:0000:1428:57AB theo đúng quy tắc.",
      o: [
        "2001:DB8::1428:57AB",
        "2001:DB8::1428::57AB",
        "2001:DB8:1428:57AB",
        "21:DB8::1428:57AB"
      ],
      e: "Bỏ số 0 đứng đầu mỗi cụm (0DB8 → DB8) và thay dãy cụm 0000 liên tiếp bằng “::” (chỉ 1 lần). Không được xóa số 0 ở giữa/cuối cụm (2001 ≠ 21)."
    },
    {
      l: 3,
      q: "Một mạng lớp C dùng Subnet mask mặc định có tối đa bao nhiêu máy trạm?",
      o: ["254 máy", "256 máy", "255 máy", "65534 máy"],
      e: "Host ID lớp C có 8 bit → 2⁸ = 256, trừ địa chỉ mạng (toàn 0) và địa chỉ broadcast (toàn 1) còn 254. 65534 là của lớp B."
    },
    {
      l: 3,
      q: "Một mạng có các cạnh (trọng số): A–B = 1, A–C = 4, B–C = 2, B–D = 6, C–D = 3. Theo Dijkstra, đường đi ngắn nhất từ A tới D là gì?",
      o: [
        "A–B–C–D, độ dài 6",
        "A–B–D, độ dài 7",
        "A–C–D, độ dài 7",
        "A–B–C–D, độ dài 3"
      ],
      e: "A–B–C–D = 1 + 2 + 3 = 6 là nhỏ nhất (A–B–D = 7; A–C–D = 7). “Độ dài 3” là nhầm giữa số hop với tổng trọng số."
    },
    {
      l: 3,
      q: "Công ty có 50 máy tính nhưng chỉ được ISP cấp 1 địa chỉ IP công khai, muốn tất cả các máy cùng truy cập Internet. Cơ chế nào phù hợp nhất?",
      o: [
        "NAT overload",
        "NAT tĩnh (Static NAT)",
        "Định tuyến tĩnh",
        "Địa chỉ multicast"
      ],
      e: "NAT overload cho phép ẩn toàn bộ địa chỉ nội bộ sau một hoặc một nhóm nhỏ IP công khai. NAT tĩnh ánh xạ 1-1 nên không đủ địa chỉ."
    },
    {
      l: 3,
      q: "Một gói tin đến router với TTL = 1. Router sẽ xử lý thế nào?",
      o: [
        "Giảm TTL về 0 và hủy gói tin",
        "Tăng TTL lên 2 rồi chuyển tiếp",
        "Giữ nguyên TTL = 1 và chuyển tiếp",
        "Đặt lại TTL ban đầu rồi gửi tiếp"
      ],
      e: "Router giảm TTL đi 1; gói tin có TTL = 0 bị hủy để ngăn lặp vô hạn. Đây cũng là nguyên lý của lệnh tracert (tăng dần TTL)."
    },
    {
      l: 3,
      q: "Hai máy có địa chỉ 192.168.1.10/24 và 192.168.2.10/24 cắm vào cùng một switch. Chúng có thuộc cùng một mạng không?",
      o: [
        "Không, vì địa chỉ mạng là 192.168.1.0 và 192.168.2.0",
        "Có, vì hai máy cùng cắm vào một switch",
        "Có, vì cả hai đều thuộc địa chỉ lớp C",
        "Không, vì phần Host ID của chúng đều là 10"
      ],
      e: "AND với 255.255.255.0 cho hai địa chỉ mạng khác nhau (192.168.1.0 và 192.168.2.0) nên khác mạng, dù cắm chung switch hay cùng lớp C."
    },
    {
      l: 3,
      q: "Gõ ping 127.0.0.1 thành công nhưng không ping được website. Kết luận hợp lý nhất là gì?",
      o: [
        "TCP/IP trên máy vẫn hoạt động, lỗi nằm ở kết nối ra ngoài",
        "Chồng giao thức TCP/IP trên máy bị lỗi, cần cài đặt lại",
        "Website chắc chắn đã bị xóa khỏi mạng Internet",
        "Card mạng của máy đã bị hỏng hoàn toàn"
      ],
      e: "Ping 127.0.0.1 (loopback) dùng để kiểm tra chồng giao thức TCP/IP trên máy; thành công nghĩa là TCP/IP ổn, cần kiểm tra kết nối mạng ra ngoài."
    }
  ]
});
