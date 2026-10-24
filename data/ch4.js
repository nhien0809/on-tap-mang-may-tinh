window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 4,
  title: "Tầng Giao vận",
  topics: "Socket & cổng · Dồn/phân kênh · Checksum · UDP · TCP · Bắt tay 3 bước",
  questions: [
    // ===== NHẬN BIẾT (12) =====
    {
      l: 1,
      q: "Gói dữ liệu của tầng Giao vận có tên riêng là gì?",
      o: ["Segment", "Frame", "Packet", "Bit"],
      e: "Tầng Giao vận đóng gói và thêm Header tạo thành segment. Frame là của tầng Data link, packet/datagram là của tầng Mạng."
    },
    {
      l: 1,
      q: "Số hiệu cổng well-known nằm trong khoảng nào?",
      o: ["0 – 1023", "1024 – 65535", "0 – 255", "0 – 65535"],
      e: "Cổng (0, 1023) là well-known, chỉ dùng cho mục đích quy định trước (Web = 80). Tiến trình thông thường lấy ngẫu nhiên trong (1024, 65535)."
    },
    {
      l: 1,
      q: "Trường số hiệu cổng nguồn trong Header của segment dài bao nhiêu bit?",
      o: ["16 bit", "8 bit", "32 bit", "4 bit"],
      e: "Số hiệu cổng nguồn và cổng đích mỗi trường dài 16 bit, nên số hiệu cổng nằm trong khoảng 0 – 65535."
    },
    {
      l: 1,
      q: "Header của UDP segment dài bao nhiêu byte?",
      o: ["8 byte", "20 byte", "16 byte", "40 byte"],
      e: "Header UDP = 8 byte (2 port number, length, checksum). Header TCP = 20 byte."
    },
    {
      l: 1,
      q: "Header của TCP (không kể phần Option) dài bao nhiêu byte?",
      o: ["20 byte", "8 byte", "32 byte", "60 byte"],
      e: "TCP Header dài 20 byte (không kể Option); tối đa 15 word = 60 byte."
    },
    {
      l: 1,
      q: "Theo quy ước, cổng 21 và cổng 23 lần lượt dành cho dịch vụ nào?",
      o: ["FTP và Telnet", "Telnet và FTP", "HTTP và SMTP", "DNS và FTP"],
      e: "Cổng 21 dành cho FTP, cổng 23 dành cho Telnet, cổng 80 dành cho HTTP."
    },
    {
      l: 1,
      q: "Cờ nào được dùng trong cơ chế bắt tay 3 bước để thiết lập kết nối TCP?",
      o: ["SYN", "FIN", "PSH", "URG"],
      e: "SYN = 1 dùng trong cơ chế bắt tay 3 bước. FIN dùng khi đóng kết nối; PSH yêu cầu chuyển ngay dữ liệu lên tầng ứng dụng."
    },
    {
      l: 1,
      q: "Trường checksum của TCP/UDP được tính bằng cách nào?",
      o: [
        "Cộng các từ 16 bit rồi lấy bù 1",
        "Cộng các từ 16 bit rồi lấy bù 2",
        "Nhân các từ 16 bit rồi lấy bù 1",
        "XOR các bit rồi thêm bit chẵn lẻ"
      ],
      e: "Checksum 16 bit: tính tổng các từ-máy 16 bit trong toàn bộ segment, sau đó lấy giá trị bù 1 (đảo tất cả các bit)."
    },
    {
      l: 1,
      q: "UDP là giao thức hoạt động theo kiểu nào?",
      o: [
        "Phi kết nối (connectionless)",
        "Hướng kết nối (connection oriented)",
        "Chuyển mạch kênh (circuit switching)",
        "Chuyển thẻ bài (token passing)"
      ],
      e: "UDP (User Datagram Protocol) là phi kết nối: gửi mà không thiết lập kết nối trước. TCP mới là hướng kết nối."
    },
    {
      l: 1,
      q: "Trường nào trong TCP Header cho biết số byte dữ liệu mà trạm thu còn có thể tiếp nhận?",
      o: ["Window Size", "Sequence number", "Data Offset", "Urgent Pointer"],
      e: "Window Size: tổng số byte dữ liệu mà trạm thu có thể tiếp nhận, phụ thuộc kích thước vùng đệm còn trống."
    },
    {
      l: 1,
      q: "Để xác định một socket, tiến trình gửi cần biết những thông tin nào?",
      o: [
        "Địa chỉ IP của máy nhận và số hiệu cổng",
        "Địa chỉ MAC và tên miền của máy nhận",
        "Tên tiến trình và hệ điều hành máy nhận",
        "Địa chỉ IP của router và số thứ tự gói"
      ],
      e: "Để xác định socket cần địa chỉ IP của máy nhận và định danh tiến trình nhận – tức số hiệu cổng (port number)."
    },
    {
      l: 1,
      q: "Trong TCP, cờ nào thông báo trạm phát đã kết thúc việc gửi dữ liệu?",
      o: ["FIN", "SYN", "PSH", "URG"],
      e: "FIN = 1 thông báo trạm phát đã kết thúc việc gửi dữ liệu, dùng trong thủ tục 4 bước đóng kết nối."
    },

    // ===== THÔNG HIỂU (16) =====
    {
      l: 2,
      q: "Chức năng Dồn kênh (Multiplexing) của tầng Giao vận là gì?",
      o: [
        "Bổ sung thông tin đánh dấu để bên nhận phân biệt các gói tin",
        "Dựa vào thông tin đánh dấu để chuyển gói tới đúng tiến trình",
        "Tìm đường đi tốt nhất cho gói tin qua các router trung gian",
        "Chia băng thông đường truyền thành nhiều dải tần số khác nhau"
      ],
      e: "Dồn kênh: trạm phát bổ sung thông tin đánh dấu (số hiệu cổng) để bên nhận phân biệt gói tin. Dựa vào thông tin đó chuyển tới đúng tiến trình là Phân kênh."
    },
    {
      l: 2,
      q: "Vì sao UDP thường hoạt động nhanh hơn TCP?",
      o: [
        "Không phải thiết lập kết nối, ít chức năng phức tạp",
        "Có header dài hơn nên chứa nhiều thông tin hơn",
        "Có cơ chế kiểm soát tắc nghẽn hiệu quả hơn TCP",
        "Luôn đảm bảo gói tin tới đích đúng thứ tự"
      ],
      e: "UDP không thiết lập kết nối trước khi truyền, ít chức năng phức tạp, header chỉ 8 byte nên nhanh hơn TCP."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về phạm vi hoạt động của tầng Giao vận?",
      o: [
        "Chỉ hoạt động trên thiết bị đầu cuối, không trên router hay switch",
        "Hoạt động trên mọi router trung gian dọc theo đường truyền",
        "Chỉ hoạt động trên các switch bên trong mạng LAN",
        "Hoạt động trên cả thiết bị đầu cuối lẫn các router"
      ],
      e: "Kết nối tầng Giao vận chỉ hoạt động trên hai thiết bị đầu cuối (trạm phát, trạm thu), không hoạt động trên thiết bị trung gian như switch hay router."
    },
    {
      l: 2,
      q: "Trong ví dụ chuyển thư tới trường đại học, tầng Giao vận được ví như bộ phận nào?",
      o: [
        "Bộ phận Văn thư chuyển thư trong nội bộ trường",
        "Dịch vụ Bưu chính chuyển thư từ nơi xa tới trường",
        "Người gửi thư viết địa chỉ lên phong bì thư",
        "Xe chở thư chạy trên các tuyến quốc lộ"
      ],
      e: "Tầng Giao vận ~ bộ phận Văn thư (chuyển tới đúng người nhận/tiến trình trong nội bộ); tầng Mạng ~ dịch vụ Bưu chính (chuyển giữa hai nơi ở xa)."
    },
    {
      l: 2,
      q: "Đặc điểm nào sau đây <b>KHÔNG</b> phải của giao thức UDP?",
      o: [
        "Điều chỉnh tốc độ gửi để kiểm soát tắc nghẽn",
        "Không thiết lập kết nối trước khi truyền",
        "Có chức năng dồn - phân kênh và checksum",
        "Không ghi nhớ trạng thái kết nối của phiên"
      ],
      e: "UDP KHÔNG kiểm soát tắc nghẽn, không điều chỉnh tốc độ gửi (chấp nhận mất dữ liệu để đổi lấy tốc độ). Đó là đặc điểm của TCP."
    },
    {
      l: 2,
      q: "Khi server từ chối yêu cầu kết nối của client, nó gửi lại gói tin có các cờ nào?",
      o: [
        "SYN = 0 và RST = 1",
        "SYN = 1 và ACK = 1",
        "FIN = 1 và ACK = 1",
        "SYN = 1 và RST = 1"
      ],
      e: "Từ chối kết nối: server gửi gói với SYN = 0, RST = 1 (Reset ACK). Đồng ý kết nối mới gửi SYN-ACK (SYN = 1)."
    },
    {
      l: 2,
      q: "Cờ PSH = 1 trong TCP Header có ý nghĩa gì?",
      o: [
        "Trạm nhận cần chuyển ngay dữ liệu lên tầng ứng dụng",
        "Trạm phát đã kết thúc việc gửi dữ liệu",
        "Giá trị trường Urgent Pointer là hợp lệ",
        "Yêu cầu thiết lập kết nối bằng bắt tay 3 bước"
      ],
      e: "PSH (push) = 1: trạm nhận cần chuyển ngay lập tức dữ liệu này cho tầng ứng dụng. FIN: kết thúc gửi; URG: Urgent pointer đúng; SYN: bắt tay."
    },
    {
      l: 2,
      q: "Trường Data Offset (4 bit) của TCP quy định độ dài header trong khoảng nào?",
      o: [
        "Từ 5 word (160 bit) đến 15 word (480 bit)",
        "Từ 4 word (128 bit) đến 16 word (512 bit)",
        "Từ 2 word (64 bit) đến 5 word (160 bit)",
        "Luôn cố định bằng 5 word (160 bit)"
      ],
      e: "Data Offset tính theo word (32 bit): tối thiểu 5 word (160 bit = 20 byte), tối đa 15 word (480 bit) vì 4 bit chỉ biểu diễn tới 15."
    },
    {
      l: 2,
      q: "Khi phát hiện lỗi bằng checksum, UDP xử lý thế nào?",
      o: [
        "Hủy gói hoặc chuyển lên tầng Ứng dụng kèm cảnh báo",
        "Yêu cầu trạm phát gửi lại ngay gói tin bị lỗi",
        "Tự sửa bit lỗi tại chỗ rồi chuyển lên tầng trên",
        "Gửi gói NAK để trạm phát giảm tốc độ truyền"
      ],
      e: "Checksum của UDP là cơ chế phát hiện lỗi đơn giản: khi phát hiện lỗi, UDP hủy gói hoặc vẫn chuyển lên tầng Application kèm cảnh báo; UDP không yêu cầu phát lại."
    },
    {
      l: 2,
      q: "Vì sao các gói tin TCP phải được đánh số thứ tự (Sequence Number)?",
      o: [
        "Để phát hiện gói thất lạc, gói trùng lặp và ráp lại đúng thứ tự",
        "Để router chọn được đường đi ngắn nhất tới trạm đích",
        "Để mã hóa dữ liệu, chống nghe trộm trên đường truyền",
        "Để xác định tiến trình nhận ở tầng Ứng dụng của trạm thu"
      ],
      e: "Sequence number và ACK number giúp phát hiện gói thất lạc, tránh nhận trùng và ráp lại theo đúng thứ tự – nền tảng của dịch vụ truyền tin cậy."
    },
    {
      l: 2,
      q: "Cơ chế kiểm soát lưu lượng (flow control) của TCP hoạt động dựa trên trường nào?",
      o: [
        "Window Size do trạm thu thông báo",
        "Sequence Number do trạm phát đặt",
        "Checksum do trạm thu kiểm tra",
        "Urgent Pointer do trạm phát gửi"
      ],
      e: "Trạm thu dùng trường Window Size để thường xuyên báo kích thước vùng đệm còn trống; trạm phát căn cứ vào đó để không làm tràn bộ đệm."
    },
    {
      l: 2,
      q: "Trong cơ chế chống tắc nghẽn của TCP, khi nào trạm phát giảm số gói được gửi mà chưa cần ACK?",
      o: [
        "Khi time-out hoặc nhận hai ACK cho cùng một gói",
        "Khi nhận được ACK đúng hạn cho mọi gói đã gửi",
        "Khi trạm thu báo bộ đệm còn rất nhiều chỗ trống",
        "Ngay sau khi hoàn tất cơ chế bắt tay 3 bước"
      ],
      e: "TCP tăng dần x cho tới khi bắt đầu mất gói (time-out hoặc nhận hai ACK ứng với cùng một gói) rồi giảm x cho tới khi hết mất gói."
    },
    {
      l: 2,
      q: "Kiểu truyền pipeline (đường ống) mang lại lợi ích và rủi ro gì?",
      o: [
        "Đẩy nhanh tốc độ truyền nhưng có thể gây tắc nghẽn",
        "Giảm tốc độ truyền nhưng loại bỏ hoàn toàn tắc nghẽn",
        "Không cần đánh số thứ tự gói nhưng dễ bị mất gói",
        "Không cần bộ đệm nhưng mỗi lần chỉ gửi một gói"
      ],
      e: "Pipeline gửi đồng thời nhiều gói không chờ ACK, giúp đẩy nhanh tốc độ nhưng có thể gây tắc nghẽn; vẫn cần đánh số thứ tự và buffer."
    },
    {
      l: 2,
      q: "Vì sao UDP có thể phục vụ đồng thời nhiều máy trạm hơn TCP?",
      o: [
        "Không phải theo dõi trạng thái kết nối như bộ đệm, số thứ tự",
        "Có header dài hơn nên chứa được nhiều địa chỉ hơn TCP",
        "Dùng cơ chế bắt tay 3 bước nhanh hơn so với TCP",
        "Luôn truyền gói tin có kích thước lớn hơn TCP"
      ],
      e: "TCP phải theo dõi trạng thái kết nối (vùng đệm, tham số tắc nghẽn, số hiệu gói thu/phát); UDP không quản lý các thông số này nên phục vụ được nhiều máy hơn."
    },
    {
      l: 2,
      q: "Nhóm dịch vụ nào sau đây thường được chọn chạy trên UDP?",
      o: [
        "DNS, SNMP, RIP, VoIP",
        "HTTP, FTP, SMTP, Telnet",
        "HTTP, DNS, FTP, SIP",
        "SMTP, SNMP, Telnet, RTP"
      ],
      e: "DNS, SNMP (quản lý mạng), RIP (định tuyến), VoIP/multimedia thường chọn UDP. HTTP, FTP, SMTP, Telnet cần chính xác nên dùng TCP."
    },
    {
      l: 2,
      q: "Trong mô hình Client-Server, vì sao tiến trình client biết được số hiệu cổng của server?",
      o: [
        "Vì ứng dụng server chờ tại cổng well-known đã quy định",
        "Vì server gửi số hiệu cổng cho client trước tiên",
        "Vì hệ điều hành client tự dò tất cả các cổng server",
        "Vì cổng của server luôn trùng với cổng của client"
      ],
      e: "Ứng dụng trên server chờ tại cổng well-known nên client biết trước. Khi gửi yêu cầu, client gửi kèm số hiệu cổng của mình để server trả lời."
    },

    // ===== VẬN DỤNG (12) =====
    {
      l: 3,
      q: "Một segment gồm hai từ 16 bit: 0110011001100000 và 0101010101010101. Giá trị trường checksum là bao nhiêu?",
      o: [
        "0100010001001010",
        "1011101110110101",
        "0100010001001011",
        "1011010100111110"
      ],
      e: "Tổng = 1011101110110101 (không tràn). Lấy bù 1 (đảo từng bit) được 0100010001001010. Phương án 1011101110110101 là quên lấy bù; 0100010001001011 là nhầm sang bù 2."
    },
    {
      l: 3,
      q: "Trạm thu cộng tất cả các từ-máy của segment (kể cả checksum) và thu được 1111111111111011. Kết luận nào đúng?",
      o: [
        "Segment đã bị lỗi trên đường truyền",
        "Segment không hề có lỗi",
        "Chỉ phần header bị lỗi, dữ liệu đúng",
        "Phải cộng thêm 1 rồi mới kết luận được"
      ],
      e: "Nếu kết quả toàn bit 1 thì không lỗi; xuất hiện bit 0 thì đã có lỗi. Checksum không cho biết lỗi nằm ở header hay dữ liệu."
    },
    {
      l: 3,
      q: "Client gửi SYN với Sequence number = 4000; server đồng ý, gửi SYN-ACK với Sequence number = 9000. Gói thứ ba client gửi có ACK number bằng bao nhiêu?",
      o: ["9001", "4001", "9000", "4000"],
      e: "Gói thứ ba của client có ACK number = server_isn + 1 = 9001. Còn 4001 là ACK number trong gói SYN-ACK của server (client_isn + 1)."
    },
    {
      l: 3,
      q: "Client gửi gói SYN có client_isn = 2500. Nếu đồng ý kết nối, gói SYN-ACK của server sẽ có ACK number bằng bao nhiêu?",
      o: ["Bằng 2501", "Bằng 2500", "Bằng 2499", "Số ngẫu nhiên"],
      e: "SYN-ACK có ACK number = client_isn + 1 = 2501; còn Sequence number của server mới là số ngẫu nhiên (server_isn)."
    },
    {
      l: 3,
      q: "Một server chạy đồng thời dịch vụ FTP và Telnet. Nó nhận được một gói tin có Destination port number = 23. Gói tin sẽ được chuyển tới đâu?",
      o: [
        "Tiến trình Telnet",
        "Tiến trình FTP",
        "Tiến trình Web",
        "Hủy bỏ gói tin"
      ],
      e: "Tầng Giao vận phân kênh dựa vào cổng đích: cổng 23 → Telnet, cổng 21 → FTP."
    },
    {
      l: 3,
      q: "Một ứng dụng gọi video trực tuyến chấp nhận mất vài gói tin nhưng yêu cầu độ trễ thấp. Nên chọn giao thức tầng Giao vận nào?",
      o: ["UDP", "TCP", "IP", "ICMP"],
      e: "Ứng dụng thời gian thực (VoIP, video streaming) ưu tiên tốc độ, chấp nhận mất dữ liệu nên dùng UDP. IP và ICMP thuộc tầng Mạng."
    },
    {
      l: 3,
      q: "Phần mềm sao lưu dữ liệu ngân hàng cần đảm bảo dữ liệu không mất, không trùng lặp, đúng thứ tự. Nên dùng giao thức nào?",
      o: ["TCP", "UDP", "ICMP", "RTP"],
      e: "TCP là giao thức truyền dữ liệu tin cậy: đảm bảo gói tới đúng thứ tự, không trùng lặp, không thất lạc, không lỗi."
    },
    {
      l: 3,
      q: "Gói dữ liệu đã tới đích an toàn nhưng gói ACK bị thất lạc. Điều gì xảy ra và TCP xử lý thế nào?",
      o: [
        "Hết time-out trạm phát gửi lại; trạm thu dựa vào số thứ tự để loại gói trùng",
        "Trạm phát chờ mãi không gửi tiếp vì chưa nhận được gói ACK",
        "Trạm thu gửi gói NAK để yêu cầu trạm phát giảm tốc độ",
        "Kết nối lập tức bị đóng lại bằng thủ tục 4 bước"
      ],
      e: "Mất ACK → hết time-out trạm phát phát lại → gói bị nhận hai lần. Nhờ Sequence Number, trạm thu nhận biết và loại gói trùng, đảm bảo mỗi gói chỉ được nhận một lần."
    },
    {
      l: 3,
      q: "Trạm thu liên tục thông báo Window Size rất nhỏ vì bộ đệm sắp đầy. Trạm phát sẽ phản ứng thế nào?",
      o: [
        "Giảm lượng dữ liệu gửi để không làm tràn bộ đệm trạm thu",
        "Tăng tốc độ gửi để trạm thu xử lý nhanh hơn",
        "Gửi lại toàn bộ dữ liệu từ đầu kết nối",
        "Chuyển sang dùng UDP để tránh phải chờ"
      ],
      e: "Đây là kiểm soát lưu lượng: trạm phát căn cứ Window Size để khống chế lượng dữ liệu gửi sao cho không làm tràn bộ đệm của trạm thu."
    },
    {
      l: 3,
      q: "Client muốn đóng kết nối TCP với server. Trình tự trao đổi gói tin nào đúng?",
      o: [
        "Client FIN → Server ACK → Server FIN → Client ACK",
        "Client SYN → Server SYN-ACK → Client ACK",
        "Client FIN → Server FIN → Client ACK → Server ACK",
        "Client RST → Server ACK → Client FIN → Server ACK"
      ],
      e: "Thủ tục 4 bước: client gửi FIN; server gửi ACK xác nhận rồi gửi tiếp FIN; client gửi ACK. Trình tự SYN – SYN-ACK – ACK là bắt tay 3 bước để mở kết nối."
    },
    {
      l: 3,
      q: "Một lập trình viên viết ứng dụng mạng mới và cần đăng ký số hiệu cổng cho tiến trình. Nên chọn trong khoảng nào?",
      o: ["1024 – 65535", "0 – 1023", "Đúng cổng 80", "Đúng cổng 0"],
      e: "Cổng 0–1023 là well-known dành cho mục đích quy định trước; tiến trình thông thường lấy trong khoảng 1024–65535 và hệ điều hành kiểm tra cổng đã bị chiếm chưa."
    },
    {
      l: 3,
      q: "Server web chạy nhiều tiến trình cùng cổng 80, các client gửi tới cũng dùng cùng số hiệu cổng nguồn. UDP phân biệt các gói dữ liệu đến dựa vào đâu?",
      o: [
        "Địa chỉ IP của các client gửi",
        "Số hiệu cổng đích của gói tin",
        "Giá trị trường Length của gói",
        "Giá trị trường checksum của gói"
      ],
      e: "Khi cả cổng đích lẫn cổng nguồn đều trùng nhau, UDP phải dựa vào địa chỉ IP của trạm phát (client) để phân biệt các gói dữ liệu."
    }
  ]
});
