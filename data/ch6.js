window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 6,
  title: "Tầng Liên kết dữ liệu",
  topics: "Frame · MAC · Tách frame · Chẵn lẻ, CRC, Hamming · ALOHA, CSMA/CD · Bridge, Switch, AP",
  questions: [
    // ===== NHẬN BIẾT (12) =====
    {
      l: 1,
      q: "Tầng Liên kết dữ liệu đóng gói packet từ tầng Mạng thành đơn vị dữ liệu nào?",
      o: ["Frame (khung tin)", "Segment (đoạn tin)", "Datagram (gói tin)", "Bit (dòng bit)"],
      e: "Tầng Data link đóng gói packet thành frame gồm Header, Payload và Trailer rồi gửi xuống tầng Vật lý."
    },
    {
      l: 1,
      q: "Địa chỉ MAC gồm bao nhiêu chữ số hệ hexa?",
      o: ["12 chữ số", "6 chữ số", "8 chữ số", "32 chữ số"],
      e: "Địa chỉ MAC gồm 12 chữ số hexa: 6 chữ số đầu là mã công ty sản xuất, 6 chữ số sau là số seri thiết bị."
    },
    {
      l: 1,
      q: "Kho địa chỉ MAC được quản lý bởi tổ chức nào?",
      o: ["IEEE", "IANA", "ICANN", "VNNIC"],
      e: "Kho địa chỉ MAC do IEEE quản lý; mỗi hãng đăng ký và được cấp một vùng địa chỉ (ví dụ CC:46:D6 – Cisco). IANA, VNNIC quản lý địa chỉ IP."
    },
    {
      l: 1,
      q: "Theo bài giảng, giao thức nào sử dụng phương pháp Cờ báo (FLAG) để tách frame?",
      o: ["PPP", "Token Ring", "Ethernet", "UDP"],
      e: "Phương pháp Cờ báo được sử dụng trong giao thức PPP (Point to Point Protocol)."
    },
    {
      l: 1,
      q: "Phương pháp kiểm tra vòng CRC được phát minh bởi ai, vào năm nào?",
      o: [
        "William Wesley Peterson, năm 1961",
        "Richard Hamming, năm 1950",
        "Norman Abramson, năm 1970",
        "Robert Metcalfe, năm 1973"
      ],
      e: "CRC do W. W. Peterson phát minh năm 1961. Hamming (1950) là mã Hamming; Abramson (1970) là ALOHA; Metcalfe (1973) là Ethernet."
    },
    {
      l: 1,
      q: "Trong phương pháp Hamming, các bit dự phòng được đặt tại những vị trí nào?",
      o: [
        "1, 2, 4, 8, … (lũy thừa của 2)",
        "1, 3, 5, 7, … (các vị trí lẻ)",
        "Toàn bộ ở cuối chuỗi bit gốc",
        "Toàn bộ ở đầu chuỗi bit gốc"
      ],
      e: "Hamming rải r bit dự phòng vào các vị trí 1, 2, 4, 8, …, 2^(r−1)."
    },
    {
      l: 1,
      q: "Hiệu suất xấp xỉ của Pure ALOHA và Slotted ALOHA lần lượt là bao nhiêu?",
      o: ["18% và 36%", "36% và 18%", "50% và 100%", "9% và 18%"],
      e: "Pure ALOHA ≈ 18%; Slotted ALOHA chia thời gian thành slot nên tránh được một nguyên nhân xung đột, hiệu suất ≈ 36%."
    },
    {
      l: 1,
      q: "Mạng Ethernet (IEEE 802.3) cổ điển sử dụng giao thức truy cập đường truyền nào?",
      o: ["CSMA/CD", "CSMA/CA", "Token Passing", "Pure ALOHA"],
      e: "Ethernet (IEEE 802.3) dùng CSMA/CD. CSMA/CA là họ tránh xung đột (IEEE 802.11); Token Passing là IEEE 802.5."
    },
    {
      l: 1,
      q: "Khi phát hiện xung đột trong CSMA/CD, trạm phát gửi tín hiệu báo động (jam signal) dài bao nhiêu bit?",
      o: ["32 bit", "16 bit", "48 bit", "8 bit"],
      e: "Phát hiện xung đột → ngừng phát, gửi gói tin báo động (jam signal) dài 32 bit, rồi chờ khoảng thời gian ngẫu nhiên."
    },
    {
      l: 1,
      q: "Chuẩn Fast Ethernet (IEEE 802.3u, năm 1995) có tốc độ bao nhiêu?",
      o: ["100 Mbps", "10 Mbps", "1000 Mbps", "10 Gbps"],
      e: "Fast Ethernet 100 Mbps (802.3u, 1995); Gigabit Ethernet 1000 Mbps (1998); 10 Gigabit Ethernet 10 Gbps."
    },
    {
      l: 1,
      q: "Chức năng kiểm soát luồng ở tầng Data link do tầng con nào đảm nhiệm?",
      o: [
        "LLC (Logical Link Control)",
        "MAC (Media Access Control)",
        "Tầng con Vật lý (PHY)",
        "Tầng con Mạng (NET)"
      ],
      e: "Kiểm soát luồng do tầng con LLC đảm nhiệm. Tầng con MAC phụ trách truy cập đường truyền (cấp phát kênh)."
    },
    {
      l: 1,
      q: "Thiết bị nào sau đây <b>KHÔNG</b> hoạt động ở tầng Liên kết dữ liệu?",
      o: ["Router", "Switch", "Bridge", "NIC"],
      e: "Thiết bị tầng Data link gồm NIC, Bridge, Switch, Access Point. Router hoạt động ở tầng Mạng."
    },

    // ===== THÔNG HIỂU (16) =====
    {
      l: 2,
      q: "Nhược điểm của phương pháp Đếm byte khi tách frame là gì?",
      o: [
        "Header một frame sai có thể làm xác định nhầm các frame sau",
        "Phải độn thêm byte ESC vào phần dữ liệu của frame",
        "Chỉ mất tối đa 2 frame khi header của frame bị sai",
        "Trạm thu không xác định được độ dài của frame"
      ],
      e: "Đếm byte chịu lỗi kém: nếu trường độ dài trong Header sai, trạm thu xác định nhầm tất cả các frame tiếp theo. Độn ESC và mất tối đa 2 frame là đặc điểm của phương pháp Cờ báo."
    },
    {
      l: 2,
      q: "Với phương pháp Cờ báo, nếu Header của một frame bị sai thì hậu quả tối đa là gì?",
      o: [
        "Mất tối đa 2 frame",
        "Mất toàn bộ các frame sau",
        "Không mất frame nào",
        "Mất đúng 1 byte dữ liệu"
      ],
      e: "Nhờ hai byte FLAG liên tiếp đánh dấu điểm kết thúc/bắt đầu frame, nếu Header một frame bị sai thì chỉ mất tối đa 2 frame."
    },
    {
      l: 2,
      q: "Phương pháp bit chẵn lẻ có khả năng gì?",
      o: [
        "Phát hiện số lẻ bit lỗi nhưng không sửa được",
        "Phát hiện và sửa được mọi lỗi bit đơn",
        "Phát hiện được cả số chẵn bit lỗi",
        "Phát hiện được mọi dạng lỗi nhóm"
      ],
      e: "Do tính chất XOR: số bit lỗi lẻ thì phát hiện được nhưng không tìm được vị trí nên không sửa; số bit lỗi chẵn thì bị hiểu nhầm là không lỗi."
    },
    {
      l: 2,
      q: "Phương pháp Chẵn lẻ cải tiến phát hiện được lỗi nhóm nhờ đâu?",
      o: [
        "Thứ tự mã hóa (theo cột) khác thứ tự truyền (theo hàng)",
        "Dùng nhiều bit chẵn lẻ hơn cho mỗi ký tự 7 bit",
        "Truyền mỗi ký tự hai lần để trạm thu so sánh",
        "Dùng phép chia đa thức thay cho phép XOR"
      ],
      e: "Mã hóa theo cột nhưng truyền theo hàng, nên các bit lỗi nằm cạnh nhau trên đường truyền bị phân tán ra nhiều cột khi kiểm tra và được phát hiện qua bit VRC."
    },
    {
      l: 2,
      q: "Phương pháp Mã khối (VRC + LRC) xác định vị trí một bit lỗi bằng cách nào?",
      o: [
        "Lấy giao điểm của cột và hàng có bit chẵn lẻ sai lệch",
        "Chia chuỗi bit cho đa thức sinh rồi lấy số dư",
        "Cộng modulo 2 tất cả các vị trí có bit 1",
        "Đếm số bit 1 trên toàn bộ khối dữ liệu"
      ],
      e: "1 bit lỗi làm một bit VRC (cột) và một bit LRC (hàng) sai lệch; giao điểm của cột và hàng đó chính là vị trí bit lỗi → sửa tại chỗ."
    },
    {
      l: 2,
      q: "Trường hợp nào phương pháp Mã khối hiểu nhầm là không có lỗi?",
      o: [
        "4 bit lỗi nằm ở 4 đỉnh của một hình chữ nhật",
        "1 bit lỗi nằm ở góc của ma trận dữ liệu",
        "2 bit lỗi nằm ở hai hàng và hai cột khác nhau",
        "3 bit lỗi cùng nằm trên một hàng"
      ],
      e: "4 bit lỗi xếp thành hình chữ nhật làm mỗi hàng và mỗi cột liên quan có 2 bit lỗi, XOR vẫn bằng 0 → hiểu nhầm không có lỗi."
    },
    {
      l: 2,
      q: "Khi nào Error correction hiệu quả hơn Error detection?",
      o: [
        "Môi trường tỷ lệ lỗi cao như vô tuyến, vệ tinh",
        "Đường truyền tỷ lệ lỗi rất thấp như cáp quang",
        "Mạng LAN có dây trong một văn phòng nhỏ",
        "Khi muốn giảm tối đa số bit dự phòng"
      ],
      e: "Error correction hiệu quả ở môi trường tỷ lệ lỗi cao (Wifi, vệ tinh, 4G/5G). Với cáp quang tỷ lệ lỗi thấp, Error detection hiệu quả hơn vì ít bit dự phòng."
    },
    {
      l: 2,
      q: "Kỹ thuật Cõng (piggybacking) giúp tiết kiệm băng thông bằng cách nào?",
      o: [
        "Lồng ACK vào header của frame dữ liệu gửi tiếp theo",
        "Gửi riêng một frame ACK ngay sau mỗi frame nhận",
        "Gộp nhiều frame nhỏ thành một frame lớn để gửi",
        "Bỏ qua việc gửi ACK cho các frame nhận đúng"
      ],
      e: "Piggybacking: trạm thu chờ gói tiếp theo từ tầng Mạng rồi lồng ACK vào trường ack trong Header, tránh tốn một frame ACK riêng (Header, thân, Trailer, Checksum)."
    },
    {
      l: 2,
      q: "Cấp phát kênh tĩnh (FDM, TDM) có nhược điểm gì?",
      o: [
        "Lãng phí khi số trạm hoặc nhu cầu thay đổi",
        "Luôn xảy ra xung đột giữa các trạm",
        "Không chia được băng thông cho nhiều trạm",
        "Chỉ dùng được cho mạng không dây"
      ],
      e: "Chia cố định N phần: nhiều hơn N trạm thì có máy không được truyền, ít hơn thì lãng phí; ngay cả N cố định thì nhu cầu mỗi lúc cũng khác nhau."
    },
    {
      l: 2,
      q: "Trong CSMA/CD, “CS” và “CD” lần lượt có nghĩa là gì?",
      o: [
        "Nghe trước khi nói và nghe trong khi nói",
        "Nghe trong khi nói và nghe trước khi nói",
        "Nói trước khi nghe và nói trong khi nghe",
        "Chuyển thẻ bài và phát hiện thẻ bài"
      ],
      e: "CS (Carrier Sense) = nghe trước khi nói; CD (Collision Detection) = nghe trong khi nói."
    },
    {
      l: 2,
      q: "Khi đường truyền bận, trạm dùng cơ chế Non-persistent sẽ làm gì?",
      o: [
        "Rút lui một khoảng ngẫu nhiên rồi lắng nghe lại",
        "Tiếp tục nghe đến khi rỗi rồi phát ngay lập tức",
        "Tiếp tục nghe đến khi rỗi rồi phát với xác suất p",
        "Phát ngay lập tức bất kể đường truyền đang bận"
      ],
      e: "Non-persistent (không kiên nhẫn): rút lui khoảng thời gian ngẫu nhiên rồi nghe lại. Nghe tiếp rồi phát với xác suất p là p-persistent (p = 1 là 1-persistent)."
    },
    {
      l: 2,
      q: "Vì sao chỉ “nghe trước khi nói” (CS) vẫn chưa đủ để tránh xung đột?",
      o: [
        "Do độ trễ truyền dẫn, trạm khác có thể phát khi gói chưa tới đích",
        "Do trạm phát không thể cảm nhận được sóng mang trên cáp",
        "Do mỗi trạm chỉ được phát trong một khe thời gian cố định",
        "Do Switch luôn phát frame ra tất cả các cổng của nó"
      ],
      e: "Nhiều trạm có thể cùng nghe thấy đường rỗi, và do độ trễ truyền dẫn, trong lúc gói chưa tới đích thì trạm khác vẫn phát → cần thêm CD."
    },
    {
      l: 2,
      q: "Switch giải quyết vấn đề xung đột tốt hơn Hub vì sao?",
      o: [
        "Đọc MAC đích và gửi frame tới đúng cổng của trạm đó",
        "Phát frame ra tất cả các cổng để chắc chắn tới đích",
        "Dùng cơ chế chuyển thẻ bài giữa các cổng với nhau",
        "Chỉ cho phép một trạm truyền tại mỗi thời điểm"
      ],
      e: "Switch đọc địa chỉ đích, gửi frame tới đúng cổng nối với trạm đó; nhiều trạm có thể đồng thời gửi mà không xung đột, frame cùng đích được xếp hàng đợi."
    },
    {
      l: 2,
      q: "Đâu là hai chức năng chính của Bridge?",
      o: [
        "Kết nối các chuẩn mạng khác nhau và tách mạng thành các LAN nhỏ",
        "Định tuyến giữa các mạng và cấp phát địa chỉ IP cho các máy",
        "Khuếch đại tín hiệu và phát lại sang cổng còn lại",
        "Phát sóng Wi-Fi và chuyển đổi tín hiệu quang – điện"
      ],
      e: "Bridge: (1) kết nối các chuẩn mạng khác nhau (Ethernet, Token Ring...) thành mạng thống nhất; (2) tách mạng chung thành nhiều LAN nhỏ để giảm lưu lượng, bảo mật giữa các bộ phận."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về Access Point?",
      o: [
        "Hoạt động như Switch không dây, ở tầng Data link và Vật lý",
        "Hoạt động ở tầng Mạng, định tuyến gói tin ra Internet",
        "Hoạt động theo kiểu full-duplex như Switch có dây",
        "Chỉ khuếch đại tín hiệu, không dùng địa chỉ MAC"
      ],
      e: "AP dùng địa chỉ MAC để gửi frame như một Switch không dây, hoạt động ở cả tầng Data link và Physical, theo kiểu half-duplex (bán song công)."
    },
    {
      l: 2,
      q: "So với địa chỉ IP, địa chỉ MAC có đặc điểm gì?",
      o: [
        "Được ghi cứng vào ROM nên người dùng khó thay đổi",
        "Có thể thay đổi dễ dàng mỗi lần kết nối mạng",
        "Do VNNIC cấp phát cho từng thiết bị mạng",
        "Dài 32 bit, được chia thành 4 octet"
      ],
      e: "Địa chỉ MAC được nhà sản xuất ghi cứng vào chip ROM, giống số khung xe. Địa chỉ IP mới dễ thay đổi và dài 32 bit (IPv4)."
    },

    // ===== VẬN DỤNG (12) =====
    {
      l: 3,
      q: "Phần payload gồm các byte: FLAG, ESC, C. Sau khi độn byte (byte-stuffing), payload trở thành gì?",
      o: [
        "ESC, FLAG, ESC, ESC, C",
        "ESC, FLAG, ESC, C",
        "FLAG, ESC, ESC, C",
        "ESC, ESC, FLAG, ESC, C"
      ],
      e: "Gặp FLAG trong payload thì độn ESC phía trước; gặp ESC cũng độn thêm ESC → ESC FLAG ESC ESC C. Hai phương án sai thường gặp là quên độn ESC hoặc quên độn FLAG."
    },
    {
      l: 3,
      q: "Chuỗi bit gốc 1011001 được gửi kèm một bit chẵn lẻ đặt ở cuối. Chuỗi được truyền đi là gì?",
      o: ["10110010", "10110011", "01011001", "11011001"],
      e: "Chuỗi có 4 bit 1 (số chẵn) nên XOR = 0 → bit chẵn lẻ là 0, đặt ở cuối: 10110010. Hai phương án cuối đặt bit chẵn lẻ sai vị trí (đầu chuỗi)."
    },
    {
      l: 3,
      q: "Trạm thu nhận một chuỗi có bit chẵn lẻ, biết rằng trên đường truyền có đúng 2 bit bị đảo. Kết quả kiểm tra sẽ như thế nào?",
      o: [
        "Trạm thu không phát hiện được lỗi",
        "Trạm thu phát hiện và sửa được lỗi",
        "Trạm thu phát hiện lỗi và yêu cầu phát lại",
        "Trạm thu xác định được vị trí 2 bit lỗi"
      ],
      e: "Số bit lỗi chẵn làm kết quả XOR không đổi → chuỗi bị hiểu nhầm là không lỗi. Độ tin cậy của phương pháp bit chẵn lẻ chỉ là 1."
    },
    {
      l: 3,
      q: "Xâu bit 101101 tương ứng với đa thức nào?",
      o: [
        "x⁵ + x³ + x² + 1",
        "x⁶ + x⁴ + x³ + x",
        "x⁵ + x³ + x² + x",
        "x⁵ + x⁴ + x² + 1"
      ],
      e: "Bit trái nhất ứng với lũy thừa cao nhất (6 bit → bậc 5): 1·x⁵ + 0·x⁴ + 1·x³ + 1·x² + 0·x + 1. Lỗi hay gặp là đánh số bậc lệch đi 1."
    },
    {
      l: 3,
      q: "Dùng CRC với đa thức sinh G(x) = x⁴ + x + 1. Trạm phát cần thêm bao nhiêu bit 0 vào cuối xâu gốc trước khi chia?",
      o: ["4 bit", "5 bit", "3 bit", "1 bit"],
      e: "G(x) bậc r = 4 nên thêm 4 bit 0. Xâu bit của G là 10011 có 5 bit – nhầm thành 5 là lỗi thường gặp."
    },
    {
      l: 3,
      q: "Xâu bit gốc 1101, đa thức sinh G(x) = x³ + x + 1 (xâu 1011). Xâu bit được truyền đi theo CRC là gì?",
      o: ["1101001", "1101000", "1101011", "1101101"],
      e: "Thêm 3 bit 0: 1101000. Chia (XOR) cho 1011 được số dư 001. Lấy số bị chia trừ số dư: 1101000 − 001 = 1101001. Phương án 1101000 là quên trừ số dư."
    },
    {
      l: 3,
      q: "Theo phương pháp Hamming, chuỗi bit gốc dài n = 4 cần tối thiểu bao nhiêu bit dự phòng?",
      o: ["3 bit", "2 bit", "4 bit", "1 bit"],
      e: "Cần 2^r > r + n: r = 3 cho 8 > 7 (đủ); r = 2 cho 4 > 6 (sai, không đủ). Vậy cần 3 bit dự phòng."
    },
    {
      l: 3,
      q: "Trong phương pháp Hamming, trạm thu cộng modulo 2 các vị trí có bit 1 và được kết quả 1011. Kết luận nào đúng?",
      o: [
        "Bit ở vị trí 11 bị lỗi",
        "Bit ở vị trí 13 bị lỗi",
        "Bit ở vị trí 3 bị lỗi",
        "Không có bit nào bị lỗi"
      ],
      e: "Kết quả khác 0 → có lỗi; 1011₂ = 11 nên bit ở vị trí 11 bị lỗi. Vị trí 13 là đọc ngược chuỗi; 3 là đếm số bit 1."
    },
    {
      l: 3,
      q: "Trong CSMA/CD, sau 3 lần đụng độ liên tiếp, số slot chờ của một trạm được chọn ngẫu nhiên trong khoảng nào?",
      o: ["Từ 0 đến 7", "Từ 0 đến 3", "Từ 0 đến 8", "Từ 0 đến 15"],
      e: "Sau i lần đụng độ liên tiếp (i < 16), số slot chờ lấy ngẫu nhiên từ 0 đến 2^i − 1. Với i = 3: từ 0 đến 7."
    },
    {
      l: 3,
      q: "Trạm mặt đất liên lạc với tàu vũ trụ ở khoảng cách rất xa. Nên chọn phương pháp xử lý lỗi nào?",
      o: [
        "Error correction để sửa lỗi tại chỗ, không cần phát lại",
        "Error detection để giảm số bit dự phòng phải gửi đi",
        "Không cần xử lý lỗi vì sóng truyền trong chân không",
        "Phương pháp đếm byte để tách frame chính xác hơn"
      ],
      e: "Với khoảng cách rất xa, phát lại tốn rất nhiều thời gian nên Error detection kém hiệu quả; cần Error correction để sửa ngay tại chỗ."
    },
    {
      l: 3,
      q: "Truyền 1 Megabit theo từng khối 1000 bit trên đường truyền có xác suất lỗi 10⁻⁶. Dùng Error detection (1 bit dự phòng/khối, phát lại khối lỗi) thì tổng số bit dự phòng là bao nhiêu?",
      o: ["2001 bit", "1000 bit", "10000 bit", "1001 bit"],
      e: "1000 khối × 1 bit = 1000 bit, cộng 1 khối lỗi phải phát lại (1001 bit) → 2001 bit. 10000 bit là của Error correction (Hamming 10 bit/khối)."
    },
    {
      l: 3,
      q: "Công ty muốn tách mạng chung thành LAN riêng cho phòng Kỹ thuật và phòng Kinh doanh để giảm lưu lượng và bảo mật giữa các phòng. Thiết bị phù hợp ở tầng Data link là gì?",
      o: ["Bridge", "Repeater", "Hub", "Modem"],
      e: "Bridge tách mạng chung thành nhiều LAN nhỏ cho từng phòng ban và kết nối chúng, giúp giảm lưu lượng và bảo mật. Repeater, Hub, Modem hoạt động ở tầng Vật lý."
    }
  ]
});
