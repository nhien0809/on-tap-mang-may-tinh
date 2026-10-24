// Chương 4 – Đề 2 (40 câu, 12-16-12). Nạp sau data/ch4.js.
window.CHAPTERS.find((c) => c.id === 4).questions.push(
  // ===== NHẬN BIẾT (12) =====
  {
    l: 1,
    q: "Dịch vụ mà tầng Giao vận cung cấp cho tầng Ứng dụng là gì?",
    o: [
      "Giúp hai tiến trình ở tầng Ứng dụng giao tiếp với nhau",
      "Tìm đường đi tốt nhất cho gói tin qua các router",
      "Chuyển dòng bit thô thành tín hiệu trên đường truyền",
      "Cấp phát địa chỉ IP cho các máy trạm trong mạng"
    ],
    e: "Tầng Giao vận giúp hai tiến trình ở tầng Ứng dụng giao tiếp: khởi tạo kênh truyền ảo, duy trì hoạt động của kênh và đóng kênh truyền."
  },
  {
    l: 1,
    q: "Danh sách cổng mặc định của các giao thức được quy định trong tài liệu nào?",
    o: ["RFC 3232", "RFC 768", "RFC 1071", "RFC 2581"],
    e: "Danh sách cổng mặc định: RFC 3232. RFC 768 là UDP, RFC 1071 là checksum, RFC 2581 là chống tắc nghẽn của TCP."
  },
  {
    l: 1,
    q: "Giao thức UDP được đặc tả trong RFC nào?",
    o: ["RFC 768", "RFC 793", "RFC 3232", "RFC 2581"],
    e: "UDP: RFC 768. TCP: RFC 793 (và 1122, 3168…)."
  },
  {
    l: 1,
    q: "Cơ chế phát hiện bit lỗi Checksum (RFC 1071) được áp dụng cho giao thức nào?",
    o: [
      "Cả TCP và UDP",
      "Chỉ riêng TCP",
      "Chỉ riêng UDP",
      "Chỉ giao thức IP"
    ],
    e: "Cơ chế Checksum áp dụng cho cả TCP và UDP; trường checksum dài 16 bit."
  },
  {
    l: 1,
    q: "Phần mềm của tầng Giao vận thường nằm ở đâu?",
    o: [
      "Trong nhân của hệ điều hành",
      "Trong bộ nhớ ROM của router",
      "Trong chip của switch mạng",
      "Trong máy chủ DNS của ISP"
    ],
    e: "Phần mềm Giao vận thường nằm ở nhân hệ điều hành, có thể là một tiến trình hay gói thư viện; chức năng tầng Giao vận nằm ở thiết bị đầu cuối."
  },
  {
    l: 1,
    q: "Trường Flag trong TCP Header gồm bao nhiêu cờ?",
    o: ["9 cờ", "6 cờ", "8 cờ", "3 cờ"],
    e: "Flag (9 bit) gồm 9 cờ: NS, CWR, ECE, URG, ACK, PSH, RST, SYN, FIN."
  },
  {
    l: 1,
    q: "Ba cờ đầu NS, CWR và ECE trong TCP Header phục vụ cơ chế nào?",
    o: [
      "Cơ chế ECN chống nghẽn mạng",
      "Cơ chế bắt tay 3 bước",
      "Cơ chế đóng kết nối 4 bước",
      "Cơ chế phát hiện bit lỗi"
    ],
    e: "NS, CWR (congestion window reduced), ECE (ECN-Echo) phục vụ cơ chế ECN (RFC 3168) chống nghẽn mạng."
  },
  {
    l: 1,
    q: "Trường Length trong header UDP cho biết điều gì?",
    o: [
      "Độ dài toàn bộ segment tính theo byte, gồm cả header",
      "Độ dài phần header tính theo đơn vị word 32 bit",
      "Số byte trạm thu còn có thể tiếp nhận",
      "Số thứ tự của gói tin trong luồng dữ liệu"
    ],
    e: "Length: độ dài tính theo byte của toàn bộ segment bao gồm cả header. Độ dài header theo word là Data Offset của TCP; số byte còn nhận được là Window Size."
  },
  {
    l: 1,
    q: "Dịch vụ chống tắc nghẽn của TCP được mô tả trong RFC nào?",
    o: ["RFC 2581", "RFC 3232", "RFC 768", "RFC 1071"],
    e: "Dịch vụ chống tắc nghẽn của TCP (congestion control) – RFC 2581."
  },
  {
    l: 1,
    q: "Header của UDP gồm những trường nào? (Chọn tất cả đáp án đúng)",
    o: [
      "Source port number",
      "UDP Length",
      "UDP checksum",
      "Sequence number"
    ],
    m: [0, 1, 2],
    e: "Header UDP (8 byte) gồm: Source port, Destination port, Length, Checksum. Sequence number chỉ có trong TCP."
  },
  {
    l: 1,
    q: "Những dịch vụ tầng Ứng dụng nào sau đây sử dụng TCP ở tầng Giao vận? (Chọn tất cả đáp án đúng)",
    o: ["HTTP", "SMTP", "FTP", "DNS"],
    m: [0, 1, 2],
    e: "Thư điện tử (SMTP), Web (HTTP), truyền file (FTP), Telnet dùng TCP. DNS thường chọn UDP."
  },
  {
    l: 1,
    q: "Khi trạm thu muốn báo cho trạm phát rằng gói tin nhận được bị hỏng, nó có thể gửi gói tin nào?",
    o: ["NAK", "SYN", "FIN", "PSH"],
    e: "Trạm thu có thể gửi gói báo lỗi NAK (Not Acknowledged), hoặc không báo mà để trạm phát tự nhận ra khi hết time-out."
  },

  // ===== THÔNG HIỂU (16) =====
  {
    l: 2,
    q: "Vì sao cần đến khái niệm cổng (port) TCP/UDP?",
    o: [
      "Để phân biệt nhiều tiến trình đang chạy trên cùng một máy",
      "Để phân biệt các máy tính khác nhau trên Internet",
      "Để tìm đường đi ngắn nhất giữa hai mạng LAN",
      "Để mã hóa dữ liệu trước khi gửi lên đường truyền"
    ],
    e: "Mỗi máy trạm có nhiều tiến trình; cổng TCP/UDP là cơ chế định danh để phân biệt các tiến trình đó. Phân biệt các máy là việc của địa chỉ IP."
  },
  {
    l: 2,
    q: "Từ góc nhìn của tầng Ứng dụng, socket có thể được xem là gì?",
    o: [
      "Cửa ngõ để tiến trình giao tiếp với bên ngoài",
      "Thiết bị phần cứng nối máy tính với cáp mạng",
      "Bảng định tuyến lưu trong bộ nhớ của router",
      "Đơn vị dữ liệu của tầng Liên kết dữ liệu"
    ],
    e: "Socket là cửa ngõ giao tiếp: tiến trình muốn gửi ra ngoài hay nhận từ bên ngoài đều phải thông qua socket."
  },
  {
    l: 2,
    q: "Khi một tiến trình đăng ký số hiệu cổng với tầng Giao vận, hệ điều hành kiểm tra điều gì?",
    o: [
      "Cổng đó đã được tiến trình khác đăng ký hay chưa",
      "Máy nhận có đang bật và kết nối mạng hay không",
      "Đường truyền tới đích có bị tắc nghẽn hay không",
      "Địa chỉ IP của máy có thuộc lớp C hay không"
    ],
    e: "Tiến trình đăng ký số hiệu cổng với tầng Giao vận; hệ điều hành kiểm tra xem cổng này đã được đăng ký bởi tiến trình khác hay chưa."
  },
  {
    l: 2,
    q: "Nếu dịch vụ của tầng Mạng bị lỗi thì tầng Giao vận sẽ như thế nào?",
    o: [
      "Cũng không thể hoàn thành công việc của mình",
      "Vẫn hoạt động bình thường vì độc lập hoàn toàn",
      "Tự thay thế tầng Mạng để định tuyến gói tin",
      "Chuyển sang dùng UDP để vượt qua sự cố"
    ],
    e: "Tầng Giao vận sử dụng dịch vụ của tầng Mạng; như Bưu chính trục trặc thì bộ phận Văn thư hoạt động tốt đến mấy thư cũng không tới trường được."
  },
  {
    l: 2,
    q: "Việc đảm bảo tính toàn vẹn dữ liệu của tầng Giao vận gồm những yêu cầu nào? (Chọn tất cả đáp án đúng)",
    o: [
      "Gói tới đúng thứ tự phát, không trùng lặp",
      "Gói không bị thất lạc trên đường truyền",
      "Gói không bị lỗi bit 0 thành 1 và ngược lại",
      "Gói đi theo đường ngắn nhất qua các router"
    ],
    m: [0, 1, 2],
    e: "Toàn vẹn dữ liệu: đúng thứ tự, không trùng lặp, không thất lạc, không lỗi bit. Chọn đường đi qua router là việc của tầng Mạng."
  },
  {
    l: 2,
    q: "Khi trạm thu không chủ động báo lỗi, trạm phát nhận biết gói tin bị lỗi nhờ đâu?",
    o: [
      "Hết thời gian time-out mà không nhận được ACK",
      "Nhận được gói SYN từ trạm thu gửi lại",
      "Trường checksum ở trạm phát tự đổi giá trị",
      "Router trung gian gửi thông báo về trạm phát"
    ],
    e: "Trạm phát khởi động đồng hồ khi gửi; nếu quá time-out không có ACK thì coi như gói bị lỗi và phát lại."
  },
  {
    l: 2,
    q: "Theo bài giảng, trên thực tế tỷ lệ chuyển giao chính xác của UDP khoảng bao nhiêu?",
    o: ["Từ 99% trở lên", "Khoảng 50%", "Khoảng 75%", "Đúng 100%"],
    e: "Thực tế tỷ lệ chuyển giao chính xác của UDP ≥ 99%, và do ít chức năng phức tạp nên UDP chạy nhanh hơn TCP. UDP không đảm bảo 100%."
  },
  {
    l: 2,
    q: "Khi cờ URG = 1, trường Urgent Pointer trong TCP Header cho biết điều gì?",
    o: [
      "Vị trí byte dữ liệu khẩn đầu tiên (tính từ sau Sequence number)",
      "Số byte dữ liệu mà trạm thu còn có thể tiếp nhận",
      "Độ dài phần header tính theo đơn vị word",
      "Số thứ tự gói tin tiếp theo trạm thu mong đợi"
    ],
    e: "Khi URG = 1, Urgent Pointer cho biết vị trí byte dữ liệu (khẩn) đầu tiên tính từ sau trường Sequence number."
  },
  {
    l: 2,
    q: "Gói SYN đầu tiên client gửi để yêu cầu kết nối TCP có đặc điểm gì?",
    o: [
      "Không mang dữ liệu, SYN = 1, Sequence number ngẫu nhiên",
      "Mang dữ liệu, SYN = 0, Sequence number bằng 0",
      "Không mang dữ liệu, FIN = 1, ACK number ngẫu nhiên",
      "Mang dữ liệu, SYN = 1, ACK number bằng 1"
    ],
    e: "Gói SYN không mang dữ liệu, cờ SYN = 1, Sequence number là số ngẫu nhiên client_isn."
  },
  {
    l: 2,
    q: "Cơ chế bắt tay 3 bước của TCP có thể bị hacker lợi dụng để làm gì?",
    o: [
      "Tấn công từ chối dịch vụ (DOS)",
      "Đọc trộm nội dung email",
      "Thay đổi địa chỉ MAC của máy",
      "Giả mạo tên miền trên DNS"
    ],
    e: "Server đăng ký và mở sẵn cổng chờ kết nối, nên cơ chế bắt tay 3 bước bị hacker lợi dụng để tấn công DOS."
  },
  {
    l: 2,
    q: "Sau khi đóng kết nối TCP bằng thủ tục 4 bước, điều gì xảy ra?",
    o: [
      "Các tài nguyên như bộ đệm được giải phóng",
      "Server tự động mở lại kết nối mới với client",
      "Toàn bộ dữ liệu đã gửi bị xóa ở trạm thu",
      "Số hiệu cổng của server bị khóa vĩnh viễn"
    ],
    e: "Sau khi đóng kết nối, các tài nguyên như bộ đệm sẽ được giải phóng."
  },
  {
    l: 2,
    q: "Phát biểu nào sau đây về cơ chế chống tắc nghẽn của TCP là <b>KHÔNG</b> đúng?",
    o: [
      "Dựa vào cơ chế kiểm soát tắc nghẽn của tầng Mạng",
      "Dựa vào thông tin trạng thái tại trạm thu và trạm phát",
      "Kiểm soát số lượng gói dữ liệu được gửi đi",
      "Luôn lặp lại việc điều chỉnh tốc độ truyền"
    ],
    e: "Chống tắc nghẽn của TCP dựa vào thông tin trạng thái tại trạm thu và trạm phát, KHÔNG dựa vào cơ chế kiểm soát tắc nghẽn do tầng Mạng bên dưới cung cấp."
  },
  {
    l: 2,
    q: "Trong kiểu truyền pipeline, buffer của trạm phát dùng để làm gì?",
    o: [
      "Cất tạm các gói đã gửi nhưng chưa nhận được ACK",
      "Cất các gói đã nhận nhưng chưa kịp xử lý",
      "Cất bảng định tuyến tới các mạng đích",
      "Cất danh sách cổng mặc định của các giao thức"
    ],
    e: "Buffer trạm phát cất tạm các gói đã gửi nhưng chưa nhận ACK (để phát lại khi cần); buffer trạm thu cất gói đã nhận nhưng chưa kịp xử lý."
  },
  {
    l: 2,
    q: "Vì sao TCP phải liên tục lặp lại quá trình điều chỉnh số gói được gửi khi chưa nhận ACK?",
    o: [
      "Vì băng thông của đường truyền luôn biến động",
      "Vì số hiệu cổng thay đổi sau mỗi gói tin",
      "Vì header TCP có độ dài thay đổi liên tục",
      "Vì trạm thu đổi địa chỉ IP sau mỗi lần nhận"
    ],
    e: "Băng thông đường truyền luôn biến động nên TCP phải lặp lại quá trình tăng/giảm tốc độ để luôn đạt tốc độ phát tốt nhất."
  },
  {
    l: 2,
    q: "UDP không kiểm soát tắc nghẽn. Nếu trạm thu xử lý không kịp trong thời gian dài thì điều gì xảy ra?",
    o: [
      "Dữ liệu dồn vào buffer của router rồi bị mất",
      "UDP tự giảm tốc độ phát xuống cho phù hợp",
      "Trạm phát nhận được NAK và gửi lại toàn bộ",
      "Kết nối tự chuyển sang dùng TCP để an toàn"
    ],
    e: "Trạm phát UDP truyền theo tốc độ sinh dữ liệu; trạm thu không kịp thì dữ liệu được cất vào buffer của router, nếu cứ tiếp diễn sẽ bị mất."
  },
  {
    l: 2,
    q: "Vì sao với các thông điệp kích thước lớn thì TCP thường phù hợp hơn UDP?",
    o: [
      "TCP đảm bảo truyền tin cậy, đúng thứ tự cho lượng dữ liệu lớn",
      "Header TCP ngắn hơn nên chở được nhiều dữ liệu hơn",
      "TCP không cần thiết lập kết nối nên gửi nhanh hơn",
      "UDP không thể gửi gói tin nào lớn hơn 8 byte"
    ],
    e: "Gói UDP thường nhỏ (như gói thoại VoIP). Thông điệp lớn bị chia thành nhiều segment, cần TCP đảm bảo không mất, không trùng, đúng thứ tự."
  },

  // ===== VẬN DỤNG (12) =====
  {
    l: 3,
    q: "Một segment gồm hai từ 16 bit: 0011001100110011 và 0100010001000100. Giá trị trường checksum là bao nhiêu?",
    o: [
      "1000100010001000",
      "0111011101110111",
      "1000100010001001",
      "1000100010000111"
    ],
    e: "Tổng = 0111011101110111 (không tràn). Lấy bù 1 (đảo từng bit) được 1000100010001000. Phương án 0111011101110111 là quên lấy bù; 1000100010001001 là nhầm sang bù 2."
  },
  {
    l: 3,
    q: "Trạm thu nhận segment có hai từ dữ liệu 0011001100110011, 0100010001000000 và checksum 1000100010001000. Kết luận nào đúng?",
    o: [
      "Có lỗi, vì tổng của ba từ xuất hiện bit 0",
      "Không có lỗi, vì tổng gần như toàn bit 1",
      "Không kết luận được vì checksum vẫn giữ nguyên",
      "Có lỗi và đã sửa được tại chỗ"
    ],
    e: "Tổng = 0011001100110011 + 0100010001000000 + 1000100010001000 = 1111111111111011, xuất hiện bit 0 nên segment bị lỗi. Checksum chỉ phát hiện, không sửa lỗi."
  },
  {
    l: 3,
    q: "Client có client_isn = 700, server chọn server_isn = 3000. Gói SYN-ACK của server có bộ giá trị nào?",
    o: [
      "SYN = 1, Sequence number = 3000, ACK number = 701",
      "SYN = 1, Sequence number = 701, ACK number = 3000",
      "SYN = 0, Sequence number = 3000, ACK number = 700",
      "SYN = 1, Sequence number = 3001, ACK number = 700"
    ],
    e: "SYN-ACK: cờ SYN = 1, Sequence number = server_isn = 3000, ACK number = client_isn + 1 = 701."
  },
  {
    l: 3,
    q: "TCP đang gửi tối đa x = 16 gói khi chưa nhận ACK thì trạm phát nhận được hai gói ACK ứng với cùng một gói dữ liệu. TCP sẽ phản ứng thế nào?",
    o: [
      "Giảm x xuống cho tới khi không còn mất gói",
      "Tăng x lên 32 để truyền nhanh hơn",
      "Đóng kết nối bằng thủ tục 4 bước",
      "Chuyển sang gửi từng gói và chờ ACK mãi mãi"
    ],
    e: "Nhận hai ACK cho cùng một gói (hoặc time-out) là dấu hiệu mất gói; TCP giảm tốc độ (giảm x) cho tới khi không còn mất gói."
  },
  {
    l: 3,
    q: "Một ứng dụng gửi các truy vấn ngắn, cần trả lời nhanh, nếu mất có thể hỏi lại (như tra cứu tên miền). Giao thức tầng Giao vận phù hợp là gì?",
    o: ["UDP", "TCP", "IP", "ARP"],
    e: "Truy vấn ngắn, cần nhanh, chấp nhận hỏi lại khi mất → UDP (như DNS). IP và ARP không thuộc tầng Giao vận."
  },
  {
    l: 3,
    q: "Một ứng dụng chat cần gửi tệp tài liệu 50 MB và đảm bảo tệp tới nơi nguyên vẹn. Nên dùng giao thức nào ở tầng Giao vận?",
    o: ["TCP", "UDP", "RTP", "ICMP"],
    e: "Tệp lớn cần chính xác tuyệt đối, không mất, đúng thứ tự → TCP (truyền dữ liệu tin cậy)."
  },
  {
    l: 3,
    q: "Một server UDP nhận hai gói cùng cổng đích 53 từ hai tiến trình client có số hiệu cổng nguồn khác nhau. Server phân biệt hai gói dựa vào đâu?",
    o: [
      "Số hiệu cổng nguồn của hai client",
      "Số hiệu cổng đích 53 của hai gói",
      "Giá trị trường Length của hai gói",
      "Giá trị trường checksum của hai gói"
    ],
    e: "Cổng đích giống nhau nên tầng Giao vận dựa vào số hiệu cổng của tiến trình gửi; chỉ khi cổng nguồn cũng trùng mới phải dựa vào địa chỉ IP."
  },
  {
    l: 3,
    q: "Tiến trình client dùng cổng 25324 gửi gói tới server ở cổng 14950. Gói trả lời của server có số hiệu cổng như thế nào?",
    o: [
      "Cổng nguồn 14950, cổng đích 25324",
      "Cổng nguồn 25324, cổng đích 14950",
      "Cổng nguồn 14950, cổng đích 14950",
      "Cổng nguồn 80, cổng đích 25324"
    ],
    e: "Khi trả lời, cổng nguồn và cổng đích được hoán đổi: nguồn là cổng của server (14950), đích là cổng của client (25324)."
  },
  {
    l: 3,
    q: "Trạm phát gửi các gói 1, 2, 3 theo kiểu pipeline; nhận được ACK của gói 1 và gói 3, còn gói 2 hết time-out. Trạm phát sẽ làm gì?",
    o: [
      "Phát lại gói 2",
      "Phát lại cả 3 gói",
      "Phát lại gói 3",
      "Không phát lại gói nào"
    ],
    e: "Gói 2 quá time-out mà không có ACK nên coi như bị lỗi/thất lạc và được phát lại; các gói đã có ACK không cần gửi lại."
  },
  {
    l: 3,
    q: "Trường Data Offset của một TCP segment có giá trị 8. Phần header của segment dài bao nhiêu?",
    o: ["32 byte", "8 byte", "64 byte", "20 byte"],
    e: "Data Offset tính theo word 32 bit (4 byte): 8 × 4 = 32 byte (256 bit), gồm 20 byte cố định và 12 byte Option."
  },
  {
    l: 3,
    q: "Những phát biểu nào sau đây đúng khi so sánh TCP với UDP? (Chọn tất cả đáp án đúng)",
    o: [
      "TCP bắt tay 3 bước, UDP không thiết lập kết nối",
      "Header TCP dài 20 byte, header UDP dài 8 byte",
      "TCP kiểm soát tốc độ gửi, UDP thì không",
      "UDP đảm bảo thứ tự gói, TCP thì không"
    ],
    m: [0, 1, 2],
    e: "TCP: bắt tay 3 bước, header 20 byte, kiểm soát tốc độ gửi. UDP: phi kết nối, header 8 byte, không kiểm soát tốc độ và KHÔNG đảm bảo thứ tự."
  },
  {
    l: 3,
    q: "Một ứng dụng phát trực tiếp màn hình chơi game chọn dùng UDP. Những hệ quả nào có thể xảy ra? (Chọn tất cả đáp án đúng)",
    o: [
      "Một số gói hình ảnh bị mất",
      "Gói có thể tới đích sai thứ tự",
      "Độ trễ thấp hơn so với dùng TCP",
      "Mọi gói lỗi đều được phát lại"
    ],
    m: [0, 1, 2],
    e: "UDP phi kết nối, không đảm bảo giao nhận và thứ tự nhưng nhanh, độ trễ thấp. UDP không có cơ chế phát lại gói lỗi."
  }
);
