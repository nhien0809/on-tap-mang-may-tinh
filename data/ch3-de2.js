// Chương 3 – Đề 2 (40 câu, 12-16-12). Nạp sau data/ch3.js.
window.CHAPTERS.find((c) => c.id === 3).questions.push(
  // ===== NHẬN BIẾT (12) =====
  {
    l: 1,
    q: "Dự án nào được nêu làm ví dụ cho Điện toán lưới, nơi nhiều người tự nguyện hiến máy PC để tạo ra máy tính ảo?",
    o: ["SETI@home", "Google App Engine", "Viettel IDC", "Microsoft Azure"],
    e: "SETI@home là ví dụ của Điện toán lưới (Grid Computing) – tiền thân mà Cloud thừa kế. App Engine, Azure là PaaS; Viettel IDC cung cấp máy chủ, hosting."
  },
  {
    l: 1,
    q: "Những dịch vụ nào sau đây là dịch vụ LƯU TRỮ trên cloud được nêu trong bài? (Chọn tất cả đáp án đúng)",
    o: ["Dropbox", "Google Drive", "OneDrive", "OpenVPN"],
    m: [0, 1, 2],
    e: "Dịch vụ lưu trữ cloud: Dropbox, Google Drive, OneDrive, Box. OpenVPN là phần mềm VPN."
  },
  {
    l: 1,
    q: "Theo bài giảng, công ty nào là ví dụ cung cấp dịch vụ phần mềm nghiệp vụ trên cloud?",
    o: ["MISA", "Dropbox", "Zoom", "Salesforce"],
    e: "Dịch vụ phần mềm nghiệp vụ: công ty MISA. Dropbox là lưu trữ, Zoom là hội nghị trực tuyến, Salesforce là ví dụ PaaS."
  },
  {
    l: 1,
    q: "Trong hệ thống ảo hóa, Hypervisor có vai trò gì?",
    o: [
      "Phân chia tài nguyên vật lý cho các máy ảo",
      "Lưu trữ dữ liệu của người dùng trên cloud",
      "Định tuyến gói tin giữa các trung tâm dữ liệu",
      "Cung cấp giao diện web cho phần mềm SaaS"
    ],
    e: "Hypervisor (phần mềm ảo hóa) phân chia tài nguyên vật lý cho các máy ảo và cho phép chúng truy cập tới phần tài nguyên được chia."
  },
  {
    l: 1,
    q: "Trong kiến trúc ảo hóa, “Guest OS” là gì?",
    o: [
      "Hệ điều hành chạy trên máy ảo",
      "Hệ điều hành chạy trực tiếp trên phần cứng",
      "Phần mềm Hypervisor quản lý máy ảo",
      "Tài khoản khách truy cập dịch vụ cloud"
    ],
    e: "Hệ điều hành chạy trực tiếp trên phần cứng là Host OS; hệ điều hành chạy trên máy ảo là Guest OS."
  },
  {
    l: 1,
    q: "Kiến trúc Bare-metal Hypervisor còn được gọi là gì?",
    o: [
      "Native Hypervisor hoặc Type-1",
      "Hosted Hypervisor hoặc Type-2",
      "Guest Hypervisor hoặc Type-3",
      "Cloud Hypervisor hoặc Type-0"
    ],
    e: "Bare-metal còn gọi là Native Hypervisor hoặc Type-1; Hosted Hypervisor là Type-2."
  },
  {
    l: 1,
    q: "Trung tâm dữ liệu Viettel Hòa Lạc khai trương ngày 10/4/2024 có quy mô khoảng bao nhiêu máy chủ?",
    o: ["60.000 máy chủ", "9.000 máy chủ", "2.400 máy chủ", "300.000 máy chủ"],
    e: "Viettel Hòa Lạc: 60.000 máy chủ, hơn 2.400 rack, 21.000 m² mặt sàn, công suất 30 MW. 9.000 là số rack của 13 trung tâm vừa và nhỏ (7/2023)."
  },
  {
    l: 1,
    q: "Viết tắt ITS trong giao thông thông minh có nghĩa là gì?",
    o: [
      "Intelligent Transportation System",
      "Internet Traffic Service",
      "Integrated Transport Sensor",
      "Intelligent Toll Station"
    ],
    e: "ITS = Intelligent Transportation System – hệ thống giao thông thông minh, gồm phần mềm quản lý điều hành, điều khiển đèn, thu phí không dừng…"
  },
  {
    l: 1,
    q: "Theo bài, Trung tâm điều khiển giao thông Hà Nội (vận hành từ 13/12/2025) kiểm soát khoảng bao nhiêu camera AI?",
    o: ["1.837 camera", "837 camera", "18.370 camera", "183 camera"],
    e: "Trung tâm đặt tại 54 Trần Hưng Đạo, kiểm soát 1.837 camera AI để giám sát vi phạm, cảnh báo ùn tắc, điều chỉnh chu kỳ đèn."
  },
  {
    l: 1,
    q: "Giao thức RPL sử dụng những gói tin điều khiển ICMPv6 nào? (Chọn tất cả đáp án đúng)",
    o: ["DIO", "DAO", "DIS", "DHCP"],
    m: [0, 1, 2],
    e: "RPL dùng ba gói tin điều khiển ICMPv6: DIO, DAO, DIS. DHCP là giao thức cấp phát địa chỉ IP."
  },
  {
    l: 1,
    q: "Alexa của Amazon được mô tả là gì?",
    o: [
      "Trợ lý ảo AI điều khiển bằng giọng nói",
      "Hệ điều hành cho máy chủ đám mây",
      "Giao thức định tuyến cho mạng IoT",
      "Phần mềm ảo hóa chạy trên phần cứng"
    ],
    e: "Alexa là chương trình AI – trợ lý ảo dạng giọng nói, tích hợp vào thiết bị như loa thông minh Amazon Echo để điều khiển nhà thông minh, đặt báo thức, tìm kiếm…"
  },
  {
    l: 1,
    q: "Chuẩn kết nối năng lượng thấp nào được nêu làm ví dụ cho mạng LLN?",
    o: ["IEEE 802.15.4", "IEEE 802.3", "IEEE 802.5", "IEEE 802.11ac"],
    e: "Mạng LLN dùng chuẩn kết nối năng lượng thấp như IEEE 802.15.4, Wavenis, IEEE P1901.2. 802.3 là Ethernet, 802.5 là Token Ring."
  },

  // ===== THÔNG HIỂU (16) =====
  {
    l: 2,
    q: "Bản chất của điện toán đám mây theo bài giảng là gì?",
    o: [
      "Dịch vụ hóa (cho thuê) tài nguyên tính toán ảo, tập trung tài nguyên vật lý",
      "Mỗi cơ quan tự mua máy chủ mạnh để cung cấp mọi dịch vụ cho mình",
      "Phân tán tài nguyên vật lý tới từng máy tính của người dùng",
      "Thay thế hoàn toàn mạng Internet bằng các mạng LAN riêng"
    ],
    e: "Cloud dịch vụ hóa (cho thuê) tài nguyên tính toán ảo và tập trung tài nguyên vật lý một chỗ để dễ bảo trì, đồng bộ, nâng cao tính chuyên nghiệp."
  },
  {
    l: 2,
    q: "Ví dụ liên tưởng “tự mua máy phát điện”, “tự trồng lúa” trong bài dùng để minh họa cho điều gì?",
    o: [
      "Mô hình LAN tự cấp tự túc thay vì thuê dịch vụ chuyên nghiệp",
      "Lợi ích của việc thuê dịch vụ cloud từ nhà cung cấp",
      "Cách ảo hóa chia nhỏ một tài nguyên vật lý",
      "Mô hình mạng ngang hàng không cần máy chủ"
    ],
    e: "Tự mua máy phát điện, tự trồng lúa ví như mạng LAN tự cung cấp mọi dịch vụ – tốn kém, kém chuyên nghiệp so với thuê dịch vụ từ công ty Cloud."
  },
  {
    l: 2,
    q: "Theo đặc điểm “Broad network access”, thiết bị phía người dùng cần đáp ứng điều gì?",
    o: [
      "Chỉ cần trình duyệt và Internet, không đòi hỏi xử lý mạnh",
      "Phải có cấu hình mạnh để chạy được máy ảo",
      "Phải đặt trong cùng mạng LAN với trung tâm dữ liệu",
      "Phải cài hệ điều hành do nhà cung cấp chỉ định"
    ],
    e: "Broad network access: dùng dịch vụ cloud ở bất kỳ đâu có trình duyệt và Internet, không đòi hỏi khả năng xử lý cao ở phía người dùng."
  },
  {
    l: 2,
    q: "Những tính năng nào là đặc điểm của dịch vụ PaaS? (Chọn tất cả đáp án đúng)",
    o: [
      "Hỗ trợ phát triển, kiểm thử, triển khai ứng dụng",
      "Tích hợp dịch vụ web và cơ sở dữ liệu",
      "Hỗ trợ cộng tác cho nhóm phát triển",
      "Cho thuê đường truyền cáp quang riêng"
    ],
    m: [0, 1, 2],
    e: "PaaS hỗ trợ phát triển, kiểm thử, triển khai, vận hành ứng dụng; tích hợp dịch vụ web và CSDL; hỗ trợ cộng tác nhóm. Đường truyền mạng thuộc IaaS."
  },
  {
    l: 2,
    q: "Cloud lai (Hybrid cloud) được hình thành như thế nào?",
    o: [
      "Từ các cloud thuộc hai hoặc ba loại riêng, cộng đồng, công cộng",
      "Từ nhiều máy ảo chạy trên cùng một máy chủ vật lý",
      "Từ mạng LAN kết hợp với mạng cảm biến không dây",
      "Từ phần mềm SaaS chạy trên nền tảng PaaS"
    ],
    e: "Cơ sở hạ tầng của Cloud lai được tạo thành từ các cloud thuộc hai hay ba loại: riêng, cộng đồng, công cộng."
  },
  {
    l: 2,
    q: "Phát biểu nào đúng về Cloud công cộng (Public cloud)?",
    o: [
      "Phục vụ bất kỳ khách hàng nào, hạ tầng do nhà cung cấp sở hữu",
      "Chỉ phục vụ một cơ quan theo hình thức độc quyền",
      "Chỉ phục vụ một cộng đồng người dùng xác định",
      "Hạ tầng bắt buộc đặt tại trụ sở của khách hàng"
    ],
    e: "Public cloud phục vụ bất kỳ khách hàng nào, hạ tầng do nhà cung cấp dịch vụ Cloud sở hữu và vận hành."
  },
  {
    l: 2,
    q: "Công nghệ ảo hóa có thể làm gì với tài nguyên vật lý?",
    o: [
      "Chia một tài nguyên thành nhiều, hoặc gộp nhiều thành một rồi chia nhỏ",
      "Chỉ chia một tài nguyên vật lý thành đúng hai tài nguyên ảo",
      "Chỉ gộp nhiều tài nguyên vật lý, không chia nhỏ được",
      "Biến tài nguyên ảo thành tài nguyên vật lý mạnh hơn"
    ],
    e: "Ảo hóa chia nhỏ một tài nguyên vật lý thành nhiều tài nguyên ảo, hoặc gộp nhiều tài nguyên vật lý thành một rồi chia nhỏ để phục vụ khách hàng."
  },
  {
    l: 2,
    q: "Phát biểu nào sau đây về lợi ích của ảo hóa là <b>KHÔNG</b> đúng?",
    o: [
      "Máy ảo luôn mạnh hơn máy chủ vật lý chứa nó",
      "Tiết kiệm điện năng, chiếu sáng và làm mát",
      "Dễ dàng backup và restore toàn bộ hệ thống",
      "Phân phối tài nguyên linh hoạt, quản lý từ xa"
    ],
    e: "Tài nguyên ảo vận hành như tài nguyên vật lý nhưng khác về quy mô năng lực; máy ảo chạy trên máy chủ vật lý nên KHÔNG thể mạnh hơn máy chứa nó."
  },
  {
    l: 2,
    q: "Trong kiến trúc Hosted Hypervisor (Type-2), Hypervisor phân chia tài nguyên cho máy ảo bằng cách nào?",
    o: [
      "Sử dụng dịch vụ của hệ điều hành chủ (Host OS)",
      "Trực tiếp kiểm soát phần cứng, không qua hệ điều hành",
      "Nhờ các máy ảo tự chia tài nguyên cho nhau",
      "Nhờ trung tâm dữ liệu của nhà cung cấp phân phối"
    ],
    e: "Type-2: Hypervisor chạy trên Host OS nên dùng dịch vụ của hệ điều hành để phân chia tài nguyên. Type-1 mới trực tiếp kiểm soát phần cứng."
  },
  {
    l: 2,
    q: "Theo bài giảng, kịch bản IoT về thế giới tương lai có đặc điểm nào?",
    o: [
      "Đồ vật gắn cảm biến, có AI và định danh, phối hợp tự động không cần con người",
      "Mọi thiết bị phải có người điều khiển trực tiếp mới hoạt động được",
      "Thiết bị chỉ kết nối nội bộ, không cần kết nối Internet",
      "Chỉ máy tính và điện thoại mới được kết nối vào mạng"
    ],
    e: "IoT: đồ vật gắn cảm biến tự cảm nhận môi trường, trang bị AI, có định danh riêng và kết nối Internet để phối hợp thành hệ thống tự động không cần con người điều khiển."
  },
  {
    l: 2,
    q: "Những hạn chế nào của điện toán đám mây dẫn tới sự ra đời của Điện toán biên? (Chọn tất cả đáp án đúng)",
    o: [
      "Dữ liệu IoT tăng nhanh gây ách tắc đường truyền",
      "Gửi hết dữ liệu về Data Center dễ mất an toàn thông tin",
      "Cloud không lưu trữ được dữ liệu dạng văn bản",
      "Cloud bắt buộc người dùng tự mua máy chủ"
    ],
    m: [0, 1],
    e: "Thiết bị IoT ngày càng nhiều làm dữ liệu tăng; gửi tất cả về Data Center gây ách tắc đường truyền và mất an toàn thông tin trên đường truyền."
  },
  {
    l: 2,
    q: "Trước khi có SDN, việc định tuyến trong mạng được tổ chức như thế nào?",
    o: [
      "Phân tán: mỗi router hay switch tự quyết định cách định tuyến",
      "Tập trung: một controller quyết định cho toàn mạng",
      "Mỗi máy tính người dùng tự tính đường đi cho router",
      "Nhà cung cấp cloud định tuyến hộ cho mọi mạng"
    ],
    e: "Mô hình phân tán trước đây: mỗi router hay switch tự quyết định cách định tuyến. SDN tập trung việc quản lý vào controller."
  },
  {
    l: 2,
    q: "Hệ thống xe chỉ có khả năng cảnh báo va chạm hay lệch làn đường thuộc cấp độ tự hành nào?",
    o: ["Cấp độ 1", "Cấp độ 2", "Cấp độ 3", "Cấp độ 4"],
    e: "Cấp 1: cảnh báo va chạm hay lệch làn; cấp 2: tự hành một phần; cấp 3: người lái không cần giám sát liên tục; cấp 4: tự hành cấp cao trong khu vực giới hạn."
  },
  {
    l: 2,
    q: "Nhà thông minh tự giữ các điều kiện sinh hoạt ở mức tối ưu nhờ cơ chế nào?",
    o: [
      "Cảm biến theo dõi nhiệt độ, độ ẩm, ánh sáng… rồi tự điều chỉnh thiết bị",
      "Chủ nhà phải tự bật tắt từng thiết bị theo giờ cố định",
      "Thiết bị chỉ hoạt động khi được cắm cáp mạng trực tiếp",
      "Một máy chủ ở trung tâm dữ liệu điều khiển thủ công"
    ],
    e: "Thông qua cảm biến, nhà thông minh theo dõi nhiệt độ, độ ẩm, ánh sáng, nồng độ oxy và tự điều chỉnh đèn, điều hòa, rèm, quạt… để giữ ở mức tối ưu."
  },
  {
    l: 2,
    q: "Trong nông nghiệp thông minh, vai trò của người nông dân là gì?",
    o: [
      "Lắp đặt ban đầu, giám sát vận hành, cập nhật driver hoặc thay bộ phận lỗi",
      "Trực tiếp tưới tiêu, chăm bón và cho vật nuôi ăn hằng ngày",
      "Đi đo độ mặn và độ ẩm đất bằng tay mỗi giờ",
      "Thu côn trùng trong phễu để đo đếm thủ công"
    ],
    e: "Máy móc canh tác tự động thay con người; người nông dân chỉ lắp đặt thiết bị ban đầu, giám sát điều khiển, cập nhật driver hoặc thay bộ phận lỗi."
  },
  {
    l: 2,
    q: "Cảm biến dò khí của công ty Dryad phát hiện cháy rừng bằng cách nào?",
    o: [
      "“Ngửi” hydro, CO, hợp chất hữu cơ bay hơi rồi gửi tọa độ GPS",
      "Quan sát bằng mắt khi lửa bốc lên tới ngọn cây",
      "Chụp ảnh vệ tinh rồi gửi về trung tâm mỗi ngày",
      "Đo nhiệt độ bằng nhiệt kế do kiểm lâm mang theo"
    ],
    e: "Cảm biến Dryad dùng pin mặt trời, “ngửi” được hydro, carbon monoxide, hợp chất hữu cơ bay hơi khi cháy rồi gửi tọa độ GPS qua mạng không dây, vệ tinh, 4G – nhanh hơn cách quan sát truyền thống."
  },

  // ===== VẬN DỤNG (12) =====
  {
    l: 3,
    q: "Một công ty dùng Gmail, Zoom và Microsoft 365 thay vì tự dựng mail server và phần mềm văn phòng. Công ty đang dùng mô hình dịch vụ nào?",
    o: ["SaaS", "PaaS", "IaaS", "Grid Computing"],
    e: "Dùng phần mềm hoàn chỉnh qua giao diện web, không quản lý hạ tầng là SaaS."
  },
  {
    l: 3,
    q: "Một startup cần nơi triển khai ứng dụng web có sẵn công cụ phát triển, cơ sở dữ liệu tích hợp, không phải tự quản lý máy chủ. Mô hình phù hợp là gì?",
    o: ["PaaS", "SaaS", "IaaS", "Private cloud"],
    e: "PaaS cung cấp nền tảng phát triển, kiểm thử, triển khai ứng dụng, tích hợp dịch vụ web và CSDL."
  },
  {
    l: 3,
    q: "Một trường đại học lưu dữ liệu điểm thi trên cloud riêng, đồng thời thuê cloud công cộng để chạy trang tin tức. Trường đang dùng loại cloud nào?",
    o: ["Hybrid cloud", "Private cloud", "Public cloud", "Community cloud"],
    e: "Kết hợp cloud riêng và cloud công cộng là Cloud lai (Hybrid cloud)."
  },
  {
    l: 3,
    q: "Doanh nghiệp thuê máy ảo và yêu cầu dữ liệu phải đặt trong lãnh thổ Việt Nam. Yêu cầu này có thực hiện được không?",
    o: [
      "Được, khách có thể yêu cầu tài nguyên nằm ở vùng địa lý nào",
      "Không, khách hàng không được biết gì về vị trí tài nguyên",
      "Được, nhưng khách phải tự mua và đặt máy chủ vật lý",
      "Không, tài nguyên cloud luôn nằm ở nước ngoài"
    ],
    e: "Theo đặc điểm Resource pooling, khách không biết vị trí vật lý cụ thể của tài nguyên nhưng có thể yêu cầu chúng nằm ở vùng địa lý nào."
  },
  {
    l: 3,
    q: "Hóa đơn cloud hằng tháng của công ty tính đúng theo lượng tài nguyên đã dùng, kèm báo cáo chi tiết các lần điều chỉnh. Đây là đặc điểm nào của cloud?",
    o: [
      "Measured service",
      "Rapid elasticity",
      "Resource pooling",
      "Broad network access"
    ],
    e: "Measured service: tự động theo dõi, điều chỉnh tài nguyên tối ưu và ghi lại để báo cáo."
  },
  {
    l: 3,
    q: "Nhân viên đi công tác mở phần mềm kế toán trên cloud bằng điện thoại thông minh tại sân bay. Điều này thể hiện đặc điểm nào?",
    o: [
      "Broad network access",
      "Measured service",
      "Resource pooling",
      "Rapid elasticity"
    ],
    e: "Broad network access: sử dụng dịch vụ ở bất kỳ đâu có trình duyệt và Internet, trên mọi thiết bị, không đòi hỏi cấu hình cao."
  },
  {
    l: 3,
    q: "Khách hàng tự đăng ký thêm dung lượng lưu trữ trên trang web của nhà cung cấp lúc nửa đêm mà không cần gọi cho nhân viên. Đây là đặc điểm nào?",
    o: [
      "Tự phục vụ theo nhu cầu (On-demand self-service)",
      "Khả năng co giãn nhanh (Rapid elasticity)",
      "Điều tiết dịch vụ (Measured service)",
      "Tổng hợp tài nguyên (Resource pooling)"
    ],
    e: "Đặc điểm đầu tiên NIST nêu: khách hàng tự chọn dịch vụ theo nhu cầu mà không cần liên hệ với nhân viên."
  },
  {
    l: 3,
    q: "Một máy chủ vật lý 64 GB RAM chạy 4 máy ảo cho 4 phòng ban, mỗi máy có hệ điều hành riêng. Tình huống này minh họa điều gì?",
    o: [
      "Ảo hóa chia một tài nguyên vật lý thành nhiều tài nguyên ảo",
      "Điện toán lưới gộp nhiều máy tính tình nguyện thành một",
      "Điện toán biên xử lý dữ liệu gần nguồn phát sinh",
      "SDN tách chức năng quản lý khỏi thiết bị mạng"
    ],
    e: "Ảo hóa tạo lớp trừu tượng trên phần cứng, chia tài nguyên vật lý thành nhiều máy ảo hoạt động như máy tính độc lập với hệ điều hành riêng."
  },
  {
    l: 3,
    q: "Camera AI tại một nút giao đo lưu lượng xe và tự kéo dài pha đèn xanh cho hướng đông xe. Chức năng này thuộc hệ thống nào của ITS?",
    o: [
      "Điều khiển đèn tín hiệu và dòng lưu thông (TFC)",
      "Hệ thống thu phí không dừng",
      "Hệ thống cân tự động",
      "Hệ thống quản lý xe buýt"
    ],
    e: "TFC (Traffic Flow Control System) điều khiển đèn tín hiệu và dòng lưu thông; dữ liệu camera giúp rút ngắn hoặc kéo dài pha đèn theo lưu lượng từng hướng."
  },
  {
    l: 3,
    q: "Bệnh nhân tim đeo vòng y tế tự đo nhịp tim, huyết áp và gửi cảnh báo khi bất thường. Đây là ứng dụng thuộc lĩnh vực nào?",
    o: [
      "Y tế thông minh (IoT)",
      "Điện toán lưới",
      "Mạng điều khiển bằng phần mềm",
      "Dịch vụ PaaS"
    ],
    e: "Thiết bị y tế thông minh tự động theo dõi nhịp tim, huyết áp… và gửi cảnh báo để can thiệp – ứng dụng IoT trong y tế."
  },
  {
    l: 3,
    q: "Một chiếc quạt được coi là thiết bị thông minh khi có những khả năng nào? (Chọn tất cả đáp án đúng)",
    o: [
      "Gắn cảm biến cảm nhận môi trường",
      "Kết nối mạng để điều khiển từ xa",
      "Tự hoạt động theo điều kiện cài đặt",
      "Thiết kế nhỏ gọn và dùng pin sạc"
    ],
    m: [0, 1, 2],
    e: "Thiết bị thông minh được trang bị cảm biến, khả năng kết nối mạng và tự hoạt động. Nhỏ gọn, dùng pin không làm thiết bị trở nên thông minh."
  },
  {
    l: 3,
    q: "Mạng cảm biến trong một nông trại dùng chuẩn IEEE 802.15.4, các nút chạy pin nhỏ. Những nhận định nào đúng với mạng này? (Chọn tất cả đáp án đúng)",
    o: [
      "Gói tin có thể không tới được đích",
      "Cần giảm tối thiểu lưu lượng gói điều khiển",
      "Phù hợp dùng giao thức định tuyến RPL",
      "Các nút có CPU và RAM rất mạnh"
    ],
    m: [0, 1, 2],
    e: "Đây là mạng LLN: kết nối năng lượng thấp nên kém tin cậy, cần tiết kiệm băng thông/năng lượng và phù hợp với RPL. CPU, RAM, năng lượng của các nút đều ít ỏi."
  }
);
