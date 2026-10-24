window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 2,
  title: "Tầng Ứng dụng",
  topics: "HTTP/HTTPS · DNS · Email (SMTP, POP3, IMAP) · OTT · VoIP · Streaming",
  questions: [
    // ===== NHẬN BIẾT (12) =====
    {
      l: 1,
      q: "Giao thức HTTP sử dụng cổng mặc định nào?",
      o: ["Cổng 80", "Cổng 443", "Cổng 25", "Cổng 21"],
      e: "HTTP client và web server giao tiếp qua cổng mặc định 80. Cổng 443 là HTTPS, 25 là SMTP, 21 là FTP."
    },
    {
      l: 1,
      q: "Giao thức HTTPS sử dụng cổng mặc định nào?",
      o: ["Cổng 443", "Cổng 80", "Cổng 143", "Cổng 993"],
      e: "HTTPS (RFC 2660) dùng cổng 443. Cổng 143 là IMAP, 993 là IMAPS."
    },
    {
      l: 1,
      q: "SMTP client thiết lập kết nối TCP tới cổng nào trên SMTP server?",
      o: ["Cổng 25", "Cổng 110", "Cổng 143", "Cổng 80"],
      e: "SMTP client thiết lập kết nối TCP với cổng 25 trên SMTP server (mail server của người nhận)."
    },
    {
      l: 1,
      q: "IMAP server thường trực phục vụ tại cổng nào?",
      o: ["Cổng 143", "Cổng 993", "Cổng 25", "Cổng 443"],
      e: "IMAP phục vụ tại cổng 143; phiên bản mở rộng IMAPS (mã hóa bằng SSL) dùng cổng 993."
    },
    {
      l: 1,
      q: "HTTP là viết tắt của cụm từ nào?",
      o: [
        "HyperText Transfer Protocol",
        "HyperText Transmission Program",
        "High Transfer Text Protocol",
        "HyperLink Transfer Protocol"
      ],
      e: "HTTP = HyperText Transfer Protocol – giao thức truyền tải siêu văn bản."
    },
    {
      l: 1,
      q: "Chức năng chính của hệ thống DNS là gì?",
      o: [
        "Chuyển đổi tên miền sang địa chỉ IP tương ứng",
        "Cấp phát địa chỉ IP động cho các máy trạm",
        "Mã hóa dữ liệu truyền giữa client và server",
        "Chuyển thư từ mail server này sang mail server khác"
      ],
      e: "DNS phân giải tên miền sang địa chỉ IP (vì IP dài, khó nhớ), hoạt động như một danh bạ điện thoại. Cấp IP động là DHCP; mã hóa là SSL/TLS; chuyển thư là SMTP."
    },
    {
      l: 1,
      q: "Gốc (root) của cây tên miền do tổ chức nào quản lý?",
      o: ["ICANN", "VNNIC", "IETF", "ISO"],
      e: "Gốc cây tên miền do ICANN quản lý. VNNIC quản lý tên miền .vn được ICANN ủy quyền."
    },
    {
      l: 1,
      q: "Hiện nay Internet có bao nhiêu hệ thống Root Name Server khác nhau?",
      o: ["13 hệ thống", "12 hệ thống", "16 hệ thống", "10 hệ thống"],
      e: "Internet có 13 hệ thống Root Name Server (từng bị tấn công DDoS năm 2002, 2012, 2015 nhưng thất bại)."
    },
    {
      l: 1,
      q: "Hệ thống thư điện tử gồm ba thành phần nào?",
      o: [
        "User Agent, Mail Server và giao thức SMTP",
        "Web Browser, Web Server và giao thức HTTP",
        "User Agent, Name Server và giao thức DNS",
        "Softphone, tổng đài IP và giao thức SIP"
      ],
      e: "Hệ thống thư điện tử gồm 3 thành phần: User Agent (phần mềm thư), Mail Server và giao thức SMTP."
    },
    {
      l: 1,
      q: "Giao thức SIP chỉ có hai loại thông điệp nào?",
      o: [
        "Request và Response",
        "GET và POST",
        "SYN và ACK",
        "Query và Respond"
      ],
      e: "SIP chỉ có 2 thông điệp Request và Response, đều ở dạng văn bản; phiên làm việc theo mô hình Client-Server."
    },
    {
      l: 1,
      q: "Cookie là file dữ liệu có kích thước như thế nào?",
      o: [
        "Nhỏ, dưới 4KB",
        "Khoảng 64KB",
        "Khoảng 1MB",
        "Không giới hạn"
      ],
      e: "Cookie là file data kích thước nhỏ (<4KB), ghi nhớ thông tin trạng thái của người dùng."
    },
    {
      l: 1,
      q: "Phiên bản HTTP nào sử dụng UDP thay vì TCP?",
      o: ["HTTP/3", "HTTP/2", "HTTP/1.1", "HTTP/1.0"],
      e: "HTTP sử dụng TCP, trừ HTTP/3 (IETF phát hành ở dạng thử nghiệm) sử dụng UDP."
    },

    // ===== THÔNG HIỂU (16) =====
    {
      l: 2,
      q: "Vì sao cần có cookie khi truy cập website qua HTTP?",
      o: [
        "Vì HTTP là stateless, không ghi nhớ trạng thái sau khi hủy kết nối",
        "Vì HTTP là connectionless nên không truyền được nhiều thông điệp",
        "Vì HTTP không mã hóa nên cookie giúp bảo mật dữ liệu truyền đi",
        "Vì HTTP chạy trên UDP nên cần cookie để chống mất gói tin"
      ],
      e: "Mọi phiên bản HTTP đều stateless: hủy kết nối là client và server xóa thông tin trạng thái về nhau, nên cần cookie để ghi nhớ trạng thái."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về kiểu kết nối của các phiên bản HTTP?",
      o: [
        "HTTP/1.1 dùng một kết nối để truyền nhiều cặp thông điệp",
        "HTTP/1.0 dùng một kết nối để truyền nhiều cặp thông điệp",
        "HTTP/1.1 hủy kết nối sau mỗi cặp Request - Response",
        "HTTP/2 hoạt động theo kiểu connectionless như HTTP/1.0"
      ],
      e: "HTTP/1.1 và HTTP/2 dùng kết nối liên tục (persistent). HTTP/1.0 là connectionless: truyền xong một cặp Request-Response thì hủy kết nối."
    },
    {
      l: 2,
      q: "Trong thông điệp HTTP, các trường Header được kết thúc bằng dấu hiệu nào?",
      o: [
        "Một dòng trống (hai dấu xuống dòng liên tiếp)",
        "Ký tự kết thúc tệp EOF ở cuối Header",
        "Dấu chấm phẩy ở cuối dòng Header cuối cùng",
        "Thẻ </html> của phần Message Body"
      ],
      e: "Mỗi dòng kết thúc bằng CR+LF; một dòng trống (hai dấu xuống dòng liên tiếp) đánh dấu kết thúc các trường Header."
    },
    {
      l: 2,
      q: "Một HTTP Response gồm ba phần nào?",
      o: [
        "Status Line, các Header, Body",
        "Request Line, các Header, Body",
        "Status Line, Cookie, Trailer",
        "Header, Payload, Trailer"
      ],
      e: "HTTP Response gồm Status Line, các Header, Body. Request Line thuộc HTTP Request; Header–Payload–Trailer là cấu trúc frame tầng Data link."
    },
    {
      l: 2,
      q: "Phát biểu nào sau đây về HTTPS là <b>KHÔNG</b> đúng?",
      o: [
        "Truy cập website nhanh hơn HTTP",
        "Là HTTP kết hợp với SSL hoặc TLS",
        "Dùng hạ tầng khóa công khai PKI",
        "Là tiêu chí xếp hạng của Google"
      ],
      e: "HTTPS truy cập website CHẬM hơn HTTP do phải mã hóa. HTTPS = HTTP + SSL/TLS, dùng PKI (mã hóa không đối xứng) và là tiêu chí xếp hạng website."
    },
    {
      l: 2,
      q: "Điểm khác biệt giữa HTTP và SMTP là gì?",
      o: [
        "HTTP hoạt động kiểu “kéo”, còn SMTP “đẩy” thư đi",
        "HTTP hoạt động kiểu “đẩy”, còn SMTP “kéo” thư về",
        "HTTP chạy trên UDP, còn SMTP chạy trên TCP",
        "HTTP truyền file, còn SMTP không truyền file"
      ],
      e: "Cả hai đều là giao thức truyền file, nhưng HTTP hoạt động theo kiểu “kéo”, còn SMTP “đẩy” bức thư lên mail server."
    },
    {
      l: 2,
      q: "Ở chế độ mặc định của POP3, điều gì xảy ra sau khi người dùng tải thư về máy?",
      o: [
        "Thư tự động bị xóa trên mail server",
        "Thư vẫn được lưu lại trên mail server",
        "Thư được đồng bộ với các thiết bị khác",
        "Thư được chuyển sang thư mục lưu trữ"
      ],
      e: "Chế độ mặc định của POP3: tải về xong thì thư bị xóa trên server. Muốn giữ lại phải chọn chế độ leave mail on server."
    },
    {
      l: 2,
      q: "Đặc điểm nào sau đây <b>KHÔNG</b> phải của giao thức IMAP?",
      o: [
        "Chỉ cho một client kết nối hộp thư tại mỗi thời điểm",
        "Cho phép phân loại, đánh dấu và tìm kiếm thư",
        "Duy trì phiên làm việc đến khi người dùng thoát",
        "Có cơ chế đồng bộ khi nhiều client cùng kết nối"
      ],
      e: "Chỉ cho một client kết nối tại mỗi thời điểm là hạn chế của POP3. IMAP cho phép nhiều client cùng kết nối và có cơ chế đồng bộ hóa."
    },
    {
      l: 2,
      q: "Khi dùng Webmail, giao thức SMTP vẫn đảm nhận khâu nào?",
      o: [
        "Truyền thư giữa mail server người gửi và mail server người nhận",
        "Đẩy thư từ máy người gửi lên mail server của người gửi",
        "Kéo thư từ mail server về trình duyệt của người nhận",
        "Phân loại, đánh dấu và tìm kiếm thư trong hộp thư"
      ],
      e: "Với Webmail, HTTP đảm nhận cả khâu “đẩy” thư lên mail server và “kéo” thư về; SMTP chỉ phụ trách truyền thư giữa hai mail server."
    },
    {
      l: 2,
      q: "Khi một Name Server nhận truy vấn DNS mà nó không biết câu trả lời, nó sẽ làm gì?",
      o: [
        "Gửi truy vấn hỏi Name Server ở bậc cao hơn",
        "Trả về thông báo lỗi cho trình duyệt ngay",
        "Tự sinh một địa chỉ IP tạm thời cho tên miền",
        "Chuyển truy vấn cho mail server xử lý"
      ],
      e: "Mỗi Name Server chỉ nắm thông tin ở bậc mình phụ trách; nếu không biết sẽ hỏi Name Server bậc cao hơn (truy vấn đệ quy – Recursive query)."
    },
    {
      l: 2,
      q: "Điểm khác biệt chủ yếu giữa OTT và IPTV là gì?",
      o: [
        "OTT dùng Internet mở, IPTV phân phối qua mạng riêng",
        "OTT dùng mạng riêng, IPTV dùng Internet mở",
        "OTT chỉ truyền thoại, IPTV chỉ truyền hình ảnh",
        "OTT được kiểm duyệt chặt chẽ hơn IPTV"
      ],
      e: "Khác biệt là mạng truyền thông: OTT dùng Internet mở; IPTV phân phối qua mạng riêng (phải lắp đường truyền nội bộ + thiết bị giải mã) nên chất lượng tốt hơn. Nội dung IPTV được giám sát, OTT tự do hơn."
    },
    {
      l: 2,
      q: "Đặc điểm nào khiến dịch vụ OTT trước đây thường chỉ bị “quản lý nhẹ”?",
      o: [
        "Doanh nghiệp không sở hữu hạ tầng mạng viễn thông",
        "Doanh nghiệp tự xây dựng hạ tầng cáp quang riêng",
        "Dịch vụ chỉ hoạt động trong mạng LAN nội bộ",
        "Dịch vụ không truyền nội dung tới người dùng"
      ],
      e: "Doanh nghiệp OTT không sở hữu hạ tầng mạng, không được phân bổ tài nguyên viễn thông nên luật thường “quản lý nhẹ”. Luật Viễn thông sửa đổi 11/2023 đã siết lại."
    },
    {
      l: 2,
      q: "VoIP sử dụng công nghệ chuyển mạch nào để truyền thoại?",
      o: [
        "Chuyển mạch gói, thay cho chuyển mạch kênh analog",
        "Chuyển mạch kênh, thay cho chuyển mạch gói",
        "Chuyển mạch kênh analog như điện thoại cố định",
        "Chuyển mạch thủ công qua các tổng đài viên"
      ],
      e: "VoIP dùng chuyển mạch gói, thay thế công nghệ truyền thoại chuyển mạch kênh analog. Gói tin IP là âm thanh đã được mã hóa."
    },
    {
      l: 2,
      q: "Phát biểu nào phân biệt đúng Streaming với Progressive Download?",
      o: [
        "Streaming xem được ngay trong quá trình tải về",
        "Streaming phải tải xong mới xem được nội dung",
        "Progressive Download xem xong thì dữ liệu tự xóa",
        "Progressive Download không cần đường truyền mạng"
      ],
      e: "Streaming là “dòng chảy” liên tục, xem/nghe ngay khi đang tải; xem xong dữ liệu tự xóa. Progressive Download phải tải xong mới xem/Save as được."
    },
    {
      l: 2,
      q: "Ưu điểm nổi bật của kiến trúc ngang hàng (P2P) là gì?",
      o: [
        "Khả năng tự mở rộng khi càng nhiều máy cùng chia sẻ",
        "Bảo mật cao hơn nhờ có máy chủ kiểm soát truy cập",
        "Hiệu suất ổn định và độ tin cậy luôn rất cao",
        "Dữ liệu tập trung tại Data Center của nhà cung cấp"
      ],
      e: "P2P có khả năng tự mở rộng (tệp càng được ưa chuộng càng nhiều máy share) và hiệu quả chi phí. Nhược điểm là bảo mật, hiệu suất, độ tin cậy."
    },
    {
      l: 2,
      q: "Giao thức SRTP khác giao thức RTP ở điểm nào?",
      o: [
        "SRTP bổ sung thêm chức năng mã hóa",
        "SRTP dùng để khởi tạo phiên làm việc",
        "SRTP chỉ dùng cho tổng đài analog",
        "SRTP là giao thức độc quyền của Skype"
      ],
      e: "SRTP (Secure Real-time Transport Protocol) là phiên bản mở rộng thêm chức năng mã hóa của RTP. Khởi tạo phiên là chức năng của SIP."
    },

    // ===== VẬN DỤNG (12) =====
    {
      l: 3,
      q: "Trong tên miền math.hnue.edu.vn, phần nào là tên miền cấp cao nhất (TLD)?",
      o: ["vn", "math", "hnue", "edu"],
      e: "Tên miền đọc cấp từ phải sang trái: “vn” là TLD mã quốc gia (ccTLD), ngay dưới gốc “.”. “math” là trang nội bộ cấp thấp nhất."
    },
    {
      l: 3,
      q: "Người dùng gõ www.hnue.edu.vn, Local Name Server không có thông tin trong cơ sở dữ liệu. Nó sẽ hỏi máy chủ nào đầu tiên?",
      o: [
        "Root Name Server",
        "Máy chủ quản lý tên miền .vn",
        "Máy chủ web của hnue.edu.vn",
        "Mail server của trường"
      ],
      e: "Local Name Server hỏi Root Name Server trước; Root trả về địa chỉ NS quản lý đuôi .vn; sau đó Local NS mới hỏi máy chủ quản lý tên miền .vn."
    },
    {
      l: 3,
      q: "Cô Lan muốn đọc thư trên điện thoại, laptop và máy tính bảng cùng lúc, trạng thái đã đọc/chưa đọc được đồng bộ. Nên cấu hình giao thức nhận thư nào?",
      o: ["IMAP", "POP3 mặc định", "SMTP", "SIP"],
      e: "IMAP cho phép nhiều client cùng kết nối một hộp thư và có cơ chế đồng bộ hóa, hỗ trợ đánh dấu đã đọc/chưa đọc. SMTP dùng để gửi chứ không nhận thư."
    },
    {
      l: 3,
      q: "Anh Tuấn tải thư về máy tính bằng POP3 nhưng vẫn muốn giữ bản thư trên server để xem lại sau. Anh cần chọn chế độ nào?",
      o: [
        "Leave mail on server (download and keep)",
        "Chế độ mặc định của giao thức POP3",
        "Chế độ đồng bộ hóa của giao thức IMAP",
        "Chế độ đẩy thư của giao thức SMTP"
      ],
      e: "POP3 hỗ trợ chế độ leave mail on server: tải về máy nhưng thư vẫn lưu trên mail server. Chế độ mặc định sẽ xóa thư trên server."
    },
    {
      l: 3,
      q: "Một gia đình có nhu cầu gọi video call và chơi game online một người chơi. Theo mức tối thiểu hiện nay, nên chọn gói cước tốc độ khoảng bao nhiêu?",
      o: ["5 – 40 Mbps", "Dưới 5 Mbps", "100 – 500 Mbps", "500 – 1000 Mbps"],
      e: "Mức 5–40 Mbps đáp ứng stream video, video call, game online một người chơi. Dưới 5 Mbps chỉ đủ email, nhạc, tìm kiếm."
    },
    {
      l: 3,
      q: "Một hộ gia đình muốn stream video UHD đồng thời trên nhiều thiết bị và chơi game nhiều người chơi. Mức tốc độ phù hợp theo khuyến nghị là bao nhiêu?",
      o: ["100 – 500 Mbps", "5 – 40 Mbps", "40 – 100 Mbps", "Dưới 5 Mbps"],
      e: "100–500 Mbps: tải nhanh file rất lớn, game online nhiều người chơi đồng thời, stream UHD nhiều thiết bị. 40–100 Mbps chỉ đủ stream HD nhiều thiết bị."
    },
    {
      l: 3,
      q: "Trình duyệt nhận được dòng đầu tiên “HTTP/1.1 200 OK”. Dòng này thuộc phần nào của thông điệp?",
      o: [
        "Status Line của HTTP Response",
        "Request Line của HTTP Request",
        "Entity Header của HTTP Response",
        "Message Body của HTTP Response"
      ],
      e: "Dòng đầu của HTTP Response là Status Line (phiên bản + mã trạng thái). Request Line có dạng “GET /index.html HTTP/1.1”."
    },
    {
      l: 3,
      q: "Bạn đăng nhập một website, hôm sau mở lại vẫn ở trạng thái đăng nhập mà không cần nhập mật khẩu. Cơ chế nào đã giúp điều này?",
      o: [
        "Cookie do server gửi và lưu ở phía client",
        "Kết nối liên tục (persistent) của HTTP/1.1",
        "Bộ nhớ đệm (caching) của Local Name Server",
        "Chứng chỉ SSL/TLS của giao thức HTTPS"
      ],
      e: "Server gửi cookie chứa thông tin trạng thái cho client; lần sau client gửi request kèm cookie để server biết thiết lập trạng thái (ví dụ không cần đăng nhập lại)."
    },
    {
      l: 3,
      q: "A gửi email cho B nhưng mail server của B tạm thời không phản hồi. Mail server của A sẽ xử lý thế nào?",
      o: [
        "Giữ thư trong hàng đợi và gửi lại sau",
        "Chuyển thư qua mail server trung gian khác",
        "Xóa thư và báo lỗi ngay cho người gửi",
        "Chuyển thư sang giao thức POP3 để gửi"
      ],
      e: "Nếu gửi thất bại, mail server của A giữ bức thư trong hàng đợi và gửi lại. SMTP không dùng mail server trung gian để truyền thư."
    },
    {
      l: 3,
      q: "Một ngân hàng muốn thay tổng đài analog bằng hệ thống chăm sóc khách hàng có gọi nội bộ miễn phí, dễ di chuyển vị trí. Giải pháp phù hợp là gì?",
      o: [
        "Tổng đài IP sử dụng công nghệ VoIP",
        "Tổng đài chuyển mạch kênh analog",
        "Dịch vụ truyền hình IPTV của nhà mạng",
        "Hệ thống Webmail nội bộ của ngân hàng"
      ],
      e: "Tổng đài IP (VoIP) thay thế tổng đài analog, dùng cho tổng đài chăm sóc khách hàng; gọi nội bộ miễn phí, không phụ thuộc vị trí, dễ di chuyển."
    },
    {
      l: 3,
      q: "Một server đang lắng nghe yêu cầu tại cổng 443. Có thể dự đoán server đó cung cấp dịch vụ gì?",
      o: [
        "Web bảo mật qua HTTPS",
        "Web thông thường qua HTTP",
        "Gửi thư qua giao thức SMTP",
        "Nhận thư qua giao thức IMAP"
      ],
      e: "Cổng 443 là cổng mặc định của HTTPS. HTTP dùng 80, SMTP dùng 25, IMAP dùng 143."
    },
    {
      l: 3,
      q: "Một trường học muốn phát trực tiếp (Livestream) buổi lễ lên mạng. Nhóm yêu cầu nào là cần thiết?",
      o: [
        "Thiết bị ghi hình, phần mềm mã hóa, công cụ xuất bản, đường truyền",
        "Máy chủ DNS riêng, tên miền cấp hai và chứng chỉ SSL cho trường",
        "Tổng đài IP, điện thoại Softphone và giao thức SIP cho từng lớp",
        "Mail server, phần mềm User Agent và giao thức SMTP cho giáo viên"
      ],
      e: "Livestream đòi hỏi: thiết bị ghi hình ghi âm + phần mềm mã hóa nội dung, công cụ xuất bản nội dung multimedia và đường truyền."
    }
  ]
});
