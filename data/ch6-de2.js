// Chương 6 – Đề 2 (40 câu, 12-16-12). Nạp sau data/ch6.js.
window.CHAPTERS.find((c) => c.id === 6).questions.push(
  // ===== NHẬN BIẾT (12) =====
  {
    l: 1,
    q: "Trong cấu trúc frame, phần Trailer thường chứa thông tin gì?",
    o: [
      "Thông tin điều khiển, chẳng hạn checksum",
      "Địa chỉ của trạm phát và trạm thu",
      "Dữ liệu cần truyền từ tầng Mạng",
      "Số hiệu cổng của tiến trình nhận"
    ],
    e: "Frame gồm Header (địa chỉ trạm phát/thu), Payload (thông tin cần truyền) và Trailer (thông tin điều khiển, như checksum)."
  },
  {
    l: 1,
    q: "Tên gọi nào sau đây là tên khác của NIC?",
    o: ["Card mạng (Network Adapter)", "Bộ định tuyến (Router)", "Điểm truy cập (Access Point)", "Bộ lặp (Repeater)"],
    e: "NIC còn gọi là Network Board, Network Adapter, LAN card, card mạng, bộ điều hợp mạng."
  },
  {
    l: 1,
    q: "Lệnh nào trên Windows dùng để xem địa chỉ MAC của card mạng?",
    o: ["ipconfig /all", "tracert", "ping 127.0.0.1", "nslookup"],
    e: "Quan sát địa chỉ MAC bằng ipconfig /all (dòng Physical Address) hoặc getmac /v /fo list."
  },
  {
    l: 1,
    q: "So với lỗi đơn, lỗi nhóm có đặc điểm gì?",
    o: [
      "Phổ biến hơn và khó đối phó hơn",
      "Hiếm gặp hơn và dễ đối phó hơn",
      "Chỉ xảy ra trên cáp quang",
      "Luôn được phát hiện bằng bit chẵn lẻ"
    ],
    e: "Lỗi nhóm (các bit lỗi xuất hiện thành cụm liên tiếp) phổ biến hơn và khó đối phó hơn so với lỗi đơn."
  },
  {
    l: 1,
    q: "VRC và LRC trong phương pháp chẵn lẻ lần lượt là gì?",
    o: [
      "Bit kiểm tra chiều dọc và bit kiểm tra chiều ngang",
      "Bit kiểm tra chiều ngang và bit kiểm tra chiều dọc",
      "Mã vòng CRC và mã Hamming",
      "Bit cờ báo FLAG và bit thoát ESC"
    ],
    e: "VRC = Vertical Redundancy Check (theo cột), LRC = Longitudinal Redundancy Check (theo hàng)."
  },
  {
    l: 1,
    q: "Đa thức sinh CRC-32 được dùng trong những giao thức, định dạng nào?",
    o: [
      "Ethernet, HDLC, Gzip, PNG",
      "Mạng di động CDMA2000",
      "Giao thức truyền ATM",
      "Tín hiệu định thời BBC"
    ],
    e: "CRC-32 (0x04C11DB7) dùng trong HDLC, Ethernet, MPEG-2, PKZIP, Gzip, Bzip2, PNG."
  },
  {
    l: 1,
    q: "Mạng không dây đầu tiên ALOHANET (1970) kết nối các đảo Hawaii với tốc độ bao nhiêu?",
    o: ["9.600 bps", "56.000 bps", "2,49 Mbps", "100 Mbps"],
    e: "ALOHANET hoàn thành năm 1970 với tốc độ 9.600 bps; năm 1972 nối với ARPANET qua vệ tinh 56.000 bps."
  },
  {
    l: 1,
    q: "Mạng Ethernet đầu tiên (1973) được phát triển tại đâu?",
    o: [
      "Trung tâm nghiên cứu Palo Alto của Xerox",
      "Phòng thí nghiệm Zurich của IBM",
      "Trường Đại học Hawaii (Mỹ)",
      "Phòng thí nghiệm Bell của AT&T"
    ],
    e: "Ethernet do Robert Metcalfe và David Boggs phát triển năm 1973 tại Xerox PARC. IBM Zurich gắn với Token Ring; Đại học Hawaii gắn với ALOHA."
  },
  {
    l: 1,
    q: "Chuẩn Gigabit Ethernet trên cáp quang được IEEE chuẩn hóa năm 1998 có tên là gì?",
    o: ["IEEE 802.3z", "IEEE 802.3u", "IEEE 802.3ae", "IEEE 802.5"],
    e: "Gigabit Ethernet: 802.3z (cáp quang, 1998), 802.3ab (UTP, 1999). 802.3u là Fast Ethernet; 802.3ae là 10 Gigabit Ethernet."
  },
  {
    l: 1,
    q: "Ba giao thức nào sử dụng cơ chế cửa sổ trượt (Sliding Window)? (Chọn tất cả đáp án đúng)",
    o: ["Dừng và Chờ", "Go-Back-N", "Selective Repeat", "CSMA/CD"],
    m: [0, 1, 2],
    e: "Dừng và Chờ, Go-Back-N, Selective Repeat dùng cơ chế cửa sổ trượt. CSMA/CD là giao thức truy cập đường truyền."
  },
  {
    l: 1,
    q: "Những kỹ thuật nào thuộc nhóm chia đường truyền thành nhiều kênh con (Channel based)? (Chọn tất cả đáp án đúng)",
    o: ["FDMA", "TDMA", "CDMA", "CSMA/CD"],
    m: [0, 1, 2],
    e: "Channel based: FDMA, TDMA, CDMA, SDMA. CSMA/CD thuộc nhóm chia dữ liệu thành gói (Packet based), họ xung đột – phục hồi."
  },
  {
    l: 1,
    q: "Họ giao thức truy cập “tránh xung đột” (Collision Avoidance) gắn với chuẩn nào?",
    o: ["IEEE 802.11", "IEEE 802.3", "IEEE 802.5", "IEEE 802.3u"],
    e: "Xung đột – phục hồi: IEEE 802.3; tránh xung đột (CSMA/CA): IEEE 802.11; không xung đột (Token): IEEE 802.5."
  },

  // ===== THÔNG HIỂU (16) =====
  {
    l: 2,
    q: "Vì sao dịch vụ truyền dữ liệu tin cậy ở tầng Data link không phù hợp với cáp quang?",
    o: [
      "Tỷ lệ lỗi thấp nên phải độn thêm quá nhiều CRC không cần thiết",
      "Cáp quang không truyền được frame có phần Trailer",
      "Cáp quang chỉ hỗ trợ truyền tin không tin cậy",
      "Cáp quang luôn có tỷ lệ lỗi rất cao"
    ],
    e: "Với môi trường tỷ lệ lỗi thấp như cáp quang, dịch vụ truyền tin cậy không phù hợp vì phải độn thêm quá nhiều CRC (checksum)."
  },
  {
    l: 2,
    q: "Trong kỹ thuật độn byte, trạm thu xử lý thế nào khi đọc phần Payload?",
    o: [
      "Gặp cụm ESC-ESC hoặc ESC-FLAG thì bỏ ESC đi",
      "Gặp bất kỳ byte FLAG nào thì kết thúc frame ngay",
      "Gặp ESC thì độn thêm một ESC nữa",
      "Xóa toàn bộ các byte FLAG trong Payload"
    ],
    e: "Trạm thu làm ngược lại trạm phát: khi gặp ESC-ESC hoặc ESC-FLAG trong Payload thì bỏ ESC đi để khôi phục dữ liệu gốc."
  },
  {
    l: 2,
    q: "Theo nguyên tắc chung của phát hiện và sửa lỗi, khi tăng số bit dự phòng thì sao?",
    o: [
      "Khả năng phát hiện lỗi cao hơn nhưng tốn chi phí, thời gian hơn",
      "Khả năng phát hiện lỗi giảm nhưng truyền nhanh hơn",
      "Không ảnh hưởng gì tới khả năng phát hiện lỗi",
      "Luôn sửa được mọi lỗi mà không tốn thêm thời gian"
    ],
    e: "Số bit dự phòng càng nhiều thì khả năng phát hiện lỗi càng cao, đổi lại là chi phí và thời gian truyền."
  },
  {
    l: 2,
    q: "Trường hợp nào phương pháp Chẵn lẻ cải tiến <b>KHÔNG</b> phát hiện được lỗi?",
    o: [
      "Hai bit lỗi nằm trên cùng một cột",
      "Một lỗi nhóm nằm trên cùng một hàng",
      "Một bit lỗi đơn lẻ bất kỳ",
      "Hai bit lỗi nằm ở hai cột khác nhau"
    ],
    e: "Mỗi cột có một bit VRC; nếu hai bit lỗi cùng một cột thì VRC của cột đó không đổi → không phát hiện. Vì vậy độ tin cậy vẫn là 1."
  },
  {
    l: 2,
    q: "Khi nào phương pháp CRC không phát hiện được lỗi?",
    o: [
      "Khi đa thức nhiễu E(x) tình cờ chia hết cho đa thức sinh G(x)",
      "Khi xâu bit gốc có số bit 1 là số chẵn",
      "Khi chỉ có đúng một bit bị lỗi",
      "Khi đa thức sinh có bậc lớn hơn 4"
    ],
    e: "Số dư của V(x)/G(x) bằng số dư của E(x)/G(x); nếu E(x) chia hết cho G(x) thì trạm thu tưởng không có lỗi. Vì vậy phải chọn G(x) không là ước của các đa thức nhiễu thường gặp."
  },
  {
    l: 2,
    q: "Đa thức CRC-16-CCITT có thể phát hiện được những loại lỗi nào?",
    o: [
      "Mọi lỗi đơn, lỗi kép, lỗi có số bit lẻ và lỗi nhóm dài ≤ 16",
      "Chỉ phát hiện được lỗi đơn",
      "Chỉ phát hiện được lỗi có số bit chẵn",
      "Phát hiện và sửa được mọi lỗi nhóm"
    ],
    e: "CRC-16-CCITT phát hiện tất cả lỗi đơn và kép, lỗi có số bit lẻ, lỗi nhóm độ dài ≤ 16 và 99,997% lỗi nhóm dài 17 bit. CRC là phát hiện lỗi, không sửa lỗi."
  },
  {
    l: 2,
    q: "Phương pháp Hamming cải tiến sửa được lỗi nhóm bằng cách nào?",
    o: [
      "Xếp các từ mã thành khối theo hàng rồi truyền theo cột",
      "Tăng gấp đôi số bit dự phòng cho mỗi từ mã",
      "Thay phép XOR bằng phép chia đa thức",
      "Truyền mỗi từ mã ba lần rồi lấy đa số"
    ],
    e: "Xếp chuỗi bit (đã thêm bit dự phòng) thành hàng rồi truyền theo cột; lỗi nhóm làm mỗi từ mã chỉ chứa 1 bit lỗi nên vẫn sửa được."
  },
  {
    l: 2,
    q: "Bộ nhớ DRAM có ECC (Error Correcting Codes) dành cho server là ví dụ ứng dụng của điều gì?",
    o: [
      "Error correction – sửa lỗi tại chỗ",
      "Error detection – chỉ phát hiện lỗi",
      "Phương pháp Đếm byte để tách frame",
      "Cơ chế Cõng (piggybacking)"
    ],
    e: "Liên lạc qua bus bên trong máy (CPU–RAM) cần sửa lỗi tại chỗ; DRAM ECC là loại bộ nhớ cao cấp áp dụng Error correction."
  },
  {
    l: 2,
    q: "Giao thức dị bộ (Asynchronous DLP) có đặc điểm gì?",
    o: [
      "Truyền bất kỳ lúc nào mà không cần đồng bộ với trạm thu",
      "Phải đồng bộ theo từng bit với trạm thu trước khi truyền",
      "Chỉ truyền theo từng ký tự như giao thức BSC",
      "Chỉ dùng được trong mạng Token Ring"
    ],
    e: "Giao thức dị bộ cho phép truyền bất kỳ lúc nào mà không cần đồng bộ hóa với trạm thu; giao thức đồng bộ chia thành hướng ký tự (BSC) và hướng bit (HDLC)."
  },
  {
    l: 2,
    q: "Điểm khác nhau giữa HDLC và PPP là gì?",
    o: [
      "HDLC là giao thức hướng bit, còn PPP là hướng ký tự",
      "HDLC là giao thức hướng ký tự, còn PPP là hướng bit",
      "HDLC dùng cho mạng LAN, PPP chỉ dùng cho Wi-Fi",
      "HDLC không đồng bộ, PPP chỉ hoạt động đồng bộ"
    ],
    e: "HDLC là giao thức đồng bộ hướng bit; PPP là hướng ký tự (lấy ký tự làm đơn vị) và hoạt động ở cả chế độ đồng bộ lẫn không đồng bộ."
  },
  {
    l: 2,
    q: "Giao thức PPP thường được dùng trong trường hợp nào?",
    o: [
      "Truyền giữa các thiết bị mạng WAN, ISP cung cấp Internet cho khách",
      "Chia sẻ đường truyền chung giữa nhiều máy trong mạng LAN",
      "Phát sóng Wi-Fi cho các điện thoại trong gia đình",
      "Truyền dữ liệu giữa CPU và RAM bên trong máy tính"
    ],
    e: "PPP thường dùng để truyền giữa các thiết bị của mạng WAN (như giữa các router); đa số ISP dùng PPP để cung cấp đường truyền Internet."
  },
  {
    l: 2,
    q: "Slotted ALOHA cải thiện được hiệu suất so với Pure ALOHA nhờ đâu?",
    o: [
      "Chỉ phát vào đầu mỗi slot nên tránh xung đột với frame phát sau",
      "Lắng nghe đường truyền trước khi phát nên không còn xung đột",
      "Dùng token để chỉ một trạm được phát tại mỗi thời điểm",
      "Phát hiện xung đột trong khi phát để dừng lại ngay"
    ],
    e: "Slotted ALOHA chia thời gian thành slot, trạm chỉ phát ở đầu slot nên tránh được một trong hai nguyên nhân xung đột (frame phát sau), hiệu suất ≈ 36%."
  },
  {
    l: 2,
    q: "Với Pure ALOHA, frame X phát tại t0 an toàn khi không có frame nào được phát trong khoảng nào (t là thời gian gói đi hết chiều dài mạng)?",
    o: ["(t0, t0 + 2t)", "(t0, t0 + t)", "(t0 − t, t0)", "(t0, t0 + 3t)"],
    e: "X có thể đụng với frame phát trước hoặc phát sau, nên khoảng nguy hiểm dài 2t: không frame nào được phát trong (t0, t0 + 2t)."
  },
  {
    l: 2,
    q: "So với các chuẩn Ethernet trước, chuẩn 10 Gigabit Ethernet có đặc điểm nào?",
    o: [
      "Không tương thích ngược, không hỗ trợ chế độ bán song công",
      "Tương thích ngược hoàn toàn, vẫn hỗ trợ Hub và CSMA/CD",
      "Chỉ chạy trên cáp đồng trục mảnh",
      "Có tốc độ 100 Mbps như Fast Ethernet"
    ],
    e: "10 Gigabit Ethernet (802.3ae) không tương thích ngược, không hỗ trợ bán song công. Gigabit Ethernet mới tương thích ngược, hỗ trợ Hub và CSMA/CD."
  },
  {
    l: 2,
    q: "Phát biểu nào sau đây về giao thức Token Passing là <b>KHÔNG</b> đúng?",
    o: [
      "Được dùng rất phổ biến trong mạng LAN nhờ hiệu quả cao",
      "Loại trừ hoàn toàn khả năng xảy ra xung đột",
      "Các máy xếp theo thứ tự xác định rồi lần lượt phát",
      "Mỗi máy chỉ được phát trong khoảng thời gian tối đa"
    ],
    e: "Token Passing loại trừ xung đột nhưng ÍT được dùng trong mạng LAN vì hiệu quả không cao."
  },
  {
    l: 2,
    q: "Ngày nay Ethernet chuyển mạch (switched Ethernet) giải quyết vấn đề truy cập đường truyền chung như thế nào?",
    o: [
      "Thiết bị chuyển mạch tạo cầu nối point-to-point trực tiếp",
      "Vẫn dùng CSMA/CD trên một đường cáp chung",
      "Dùng token chuyển vòng giữa các máy trạm",
      "Chia băng thông thành các tần số cố định"
    ],
    e: "Ethernet cổ điển dùng CSMA/CD (đã lỗi thời); Ethernet chuyển mạch dùng bridge, switch tạo cầu nối point-to-point trực tiếp, giải quyết hoàn toàn vấn đề đường truyền chung."
  },

  // ===== VẬN DỤNG (12) =====
  {
    l: 3,
    q: "Trạm thu nhận được phần payload đã độn byte: A, ESC, ESC, B, ESC, FLAG. Dữ liệu gốc là gì?",
    o: [
      "A, ESC, B, FLAG",
      "A, B, FLAG",
      "A, ESC, ESC, B, FLAG",
      "A, ESC, B, ESC, FLAG"
    ],
    e: "Trạm thu bỏ ESC đứng trước trong các cụm ESC-ESC và ESC-FLAG: A, (ESC)ESC, B, (ESC)FLAG → A, ESC, B, FLAG."
  },
  {
    l: 3,
    q: "Trạm thu nhận chuỗi 8 bit (gồm bit chẵn lẻ) 11010011. Kết luận nào đúng?",
    o: [
      "Có lỗi, trạm thu yêu cầu phát lại",
      "Không có lỗi trên đường truyền",
      "Có lỗi và sửa được ngay tại chỗ",
      "Có đúng 2 bit bị lỗi"
    ],
    e: "XOR cả 8 bit: có 5 bit 1 (số lẻ) → kết quả khác 0 → có lỗi. Bit chẵn lẻ không xác định được vị trí nên không sửa được, phải yêu cầu phát lại."
  },
  {
    l: 3,
    q: "Theo phương pháp Hamming, chuỗi bit gốc dài n = 16 cần tối thiểu bao nhiêu bit dự phòng?",
    o: ["5 bit", "4 bit", "6 bit", "16 bit"],
    e: "Cần 2^r > r + n: r = 5 cho 32 > 21 (đủ); r = 4 cho 16 > 20 (sai). Vậy cần 5 bit dự phòng."
  },
  {
    l: 3,
    q: "Mã hóa chuỗi gốc 1011 bằng Hamming (đặt các bit dữ liệu vào vị trí 7, 6, 5, 3; bit dự phòng ở vị trí 4, 2, 1). Xâu bit được truyền (từ vị trí 7 xuống 1) là gì?",
    o: ["1010101", "1011010", "1010110", "1010001"],
    e: "Vị trí có bit 1: 7, 5, 3 → 111 ⊕ 101 ⊕ 011 = 001 → c4 = 0, c2 = 0, c1 = 1. Xâu: 1 0 1 c4 1 c2 c1 = 1010101."
  },
  {
    l: 3,
    q: "Trong phương pháp Hamming, trạm thu cộng modulo 2 các vị trí có bit 1 và được kết quả 0000. Kết luận nào đúng?",
    o: [
      "Không có lỗi bit đơn nào",
      "Bit ở vị trí 0 bị lỗi",
      "Mọi bit dự phòng đều bị lỗi",
      "Cần yêu cầu phát lại toàn bộ"
    ],
    e: "Kết quả XOR bằng 0 nghĩa là không phát hiện lỗi bit đơn; nếu có lỗi đơn, kết quả chính là vị trí bit lỗi."
  },
  {
    l: 3,
    q: "Xâu bit gốc 1001, đa thức sinh G(x) = x² + 1 (xâu 101). Xâu bit được truyền đi theo CRC là gì?",
    o: ["100111", "100100", "100101", "100110"],
    e: "G bậc 2 → thêm 2 bit 0: 100100. Chia (XOR) cho 101 được số dư 11. Lấy số bị chia trừ số dư: 100100 → 100111. Phương án 100100 là quên trừ số dư."
  },
  {
    l: 3,
    q: "Trong CSMA/CD, sau 5 lần đụng độ liên tiếp, số slot chờ của một trạm được chọn ngẫu nhiên trong khoảng nào?",
    o: ["Từ 0 đến 31", "Từ 0 đến 15", "Từ 0 đến 32", "Từ 0 đến 5"],
    e: "Sau i lần đụng độ (i < 16), số slot chờ lấy ngẫu nhiên từ 0 đến 2^i − 1. Với i = 5: 0 đến 31."
  },
  {
    l: 3,
    q: "Một khối 1000 bit được bảo vệ bằng phương pháp Hamming. Cần bao nhiêu bit dự phòng?",
    o: ["10 bit", "9 bit", "11 bit", "1000 bit"],
    e: "r = 10 cho 2^10 = 1024 > 1000 + 10 (đủ); r = 9 cho 512 (không đủ). Đúng như ví dụ trong bài: mỗi khối 1000 bit cần 10 bit dự phòng."
  },
  {
    l: 3,
    q: "Nhiều laptop cùng kết nối tới một Access Point. Vì AP hoạt động theo kiểu bán song công nên điều gì xảy ra?",
    o: [
      "Tại mỗi thời điểm chỉ truyền một chiều, AP phải cấp lượt truyền cho các máy",
      "Mọi laptop truyền và nhận đồng thời mà không ảnh hưởng nhau",
      "AP định tuyến gói tin của laptop ra các mạng khác nhau",
      "Các laptop không cần địa chỉ MAC khi kết nối với AP"
    ],
    e: "AP hoạt động half-duplex và điều khiển lưu lượng bằng cách cấp phát băng thông và lượt truyền cho các máy trạm; AP dùng địa chỉ MAC như một switch không dây."
  },
  {
    l: 3,
    q: "Một cơ quan cần nối mạng Token Ring cũ của phòng A với mạng Ethernet của phòng B thành mạng thống nhất. Thiết bị phù hợp là gì?",
    o: ["Bridge", "Repeater", "Hub", "Modem"],
    e: "Bridge kết nối các chuẩn mạng khác nhau (Ethernet, Token Ring…), chuyển định dạng khung tin và dùng bộ nhớ đệm bù chênh lệch tốc độ. Repeater chỉ nối hai mạng giống nhau."
  },
  {
    l: 3,
    q: "Sau lần đụng độ đầu tiên trong CSMA/CD, trạm A và B mỗi trạm chọn ngẫu nhiên chờ 0 hoặc 1 slot. Những trường hợp nào dẫn tới đụng độ lần thứ hai? (Chọn tất cả đáp án đúng)",
    o: [
      "A chọn 0, B chọn 0",
      "A chọn 1, B chọn 1",
      "A chọn 0, B chọn 1",
      "A chọn 1, B chọn 0"
    ],
    m: [0, 1],
    e: "Hai trạm chọn cùng số slot thì lại phát cùng lúc và đụng độ; chọn khác nhau thì một trạm phát trước, trạm kia nghe thấy đường bận."
  },
  {
    l: 3,
    q: "Đường truyền qua vệ tinh có tỷ lệ lỗi cao và độ trễ lớn. Những lựa chọn nào hợp lý khi xử lý lỗi? (Chọn tất cả đáp án đúng)",
    o: [
      "Dùng phương pháp sửa lỗi (Error correction)",
      "Chấp nhận dùng nhiều bit dự phòng hơn",
      "Hạn chế việc phải phát lại khung tin",
      "Chỉ dùng một bit chẵn lẻ cho mỗi khối"
    ],
    m: [0, 1, 2],
    e: "Môi trường tỷ lệ lỗi cao, phát lại tốn thời gian → Error correction (nhiều bit dự phòng hơn) để sửa tại chỗ. Một bit chẵn lẻ chỉ phát hiện được, không sửa."
  }
);
