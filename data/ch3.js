window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 3,
  title: "Xu hướng công nghệ",
  topics: "Cloud · SaaS/PaaS/IaaS · Ảo hóa · IoT · RPL · SDN · Edge Computing",
  questions: [
    // ===== NHẬN BIẾT (12) =====
    {
      l: 1,
      q: "Viện Tiêu chuẩn công nghệ quốc gia Hoa Kỳ (NIST) xác định dịch vụ cloud có bao nhiêu đặc điểm?",
      o: ["5 đặc điểm", "4 đặc điểm", "3 đặc điểm", "6 đặc điểm"],
      e: "NIST xác định 5 đặc điểm: tự phục vụ theo nhu cầu, truy cập mạng rộng rãi, tổng hợp tài nguyên, co giãn nhanh, điều tiết dịch vụ."
    },
    {
      l: 1,
      q: "Điện toán đám mây được thừa kế từ mô hình điện toán nào?",
      o: [
        "Điện toán lưới (Grid Computing)",
        "Điện toán biên (Edge Computing)",
        "Điện toán sương mù (Fog Computing)",
        "Mạng điều khiển bằng phần mềm (SDN)"
      ],
      e: "Cloud thừa kế từ Điện toán lưới, ví dụ SETI@home: nhiều người tự nguyện hiến máy PC để tạo ra máy tính ảo."
    },
    {
      l: 1,
      q: "Dịch vụ nào sau đây thuộc mô hình SaaS?",
      o: [
        "Gói ứng dụng Google Docs",
        "Nền tảng Google App Engine",
        "Máy chủ ảo cho thuê của Viettel",
        "Nền tảng Microsoft Azure"
      ],
      e: "Google Docs, MISA, VNPT-Elearning là SaaS (phần mềm dùng qua web). Google App Engine, Azure là PaaS; máy chủ ảo là IaaS."
    },
    {
      l: 1,
      q: "Google App Engine, Salesforce, Microsoft Azure là ví dụ của mô hình dịch vụ nào?",
      o: ["PaaS", "SaaS", "IaaS", "Hybrid cloud"],
      e: "Đây là các ví dụ PaaS – cung cấp nền tảng để phát triển, kiểm thử, triển khai ứng dụng trên cloud."
    },
    {
      l: 1,
      q: "Mô hình IaaS cung cấp cho khách hàng những gì?",
      o: [
        "Máy chủ ảo, thiết bị mạng, thiết bị lưu trữ, đường truyền",
        "Phần mềm hoàn chỉnh dùng ngay trên giao diện web",
        "Nền tảng và công cụ để phát triển ứng dụng trên cloud",
        "Dịch vụ thư điện tử và phần mềm hội nghị trực tuyến"
      ],
      e: "IaaS cung cấp cơ sở hạ tầng: máy chủ ảo, thiết bị mạng, thiết bị lưu trữ, đường truyền mạng."
    },
    {
      l: 1,
      q: "Phần mềm nào sau đây là phần mềm ảo hóa (Hypervisor)?",
      o: ["VMware ESXi", "Microsoft 365", "Google Workspace", "OpenVPN"],
      e: "Ví dụ Hypervisor: Microsoft Hyper-V, Oracle VM Server, VMware ESXi. Microsoft 365, Google Workspace là SaaS; OpenVPN là phần mềm VPN."
    },
    {
      l: 1,
      q: "Theo NIST, cloud được phân loại dựa trên đối tượng sử dụng gồm những loại nào?",
      o: [
        "Riêng, cộng đồng, công cộng, lai",
        "SaaS, PaaS và IaaS",
        "Type-1 và Type-2",
        "Lưới, biên, sương mù, đám mây"
      ],
      e: "Theo đối tượng sử dụng: Private, Community, Public và Hybrid cloud. SaaS/PaaS/IaaS là phân loại theo mô hình dịch vụ."
    },
    {
      l: 1,
      q: "Hiệp hội kỹ sư xe hơi (SAE) chia xe tự hành thành bao nhiêu cấp độ?",
      o: ["5 cấp độ", "3 cấp độ", "4 cấp độ", "6 cấp độ"],
      e: "SAE đưa ra 5 cấp độ xe tự hành, từ cấp 1 (cảnh báo va chạm, lệch làn) đến cấp 5 (tự hành hoàn toàn)."
    },
    {
      l: 1,
      q: "Giao thức định tuyến RPL được thiết kế cho loại mạng nào?",
      o: [
        "Mạng tổn hao năng lượng thấp (LLN)",
        "Mạng lõi tốc độ cao của các ISP",
        "Mạng định tuyến giữa các hệ thống AS",
        "Mạng cáp quang biển quốc tế"
      ],
      e: "RPL (IETF đề xuất 2008) = Routing Protocol for Low Power and Lossy Networks, dành cho mạng tổn hao năng lượng thấp như mạng cảm biến IoT."
    },
    {
      l: 1,
      q: "Trong kiến trúc SDN, thành phần được coi là “bộ não” quản lý toàn bộ mạng là gì?",
      o: [
        "Bộ điều khiển (controller)",
        "Router biên (edge router)",
        "Switch truy cập (access)",
        "Phần mềm Hypervisor"
      ],
      e: "Controller – bộ não của SDN – là phần mềm điều khiển cài trên server, quản lý và kiểm soát toàn bộ mạng."
    },
    {
      l: 1,
      q: "Sự phối hợp giữa Điện toán biên và Điện toán đám mây tạo nên mô hình nào?",
      o: [
        "Điện toán sương mù (Fog computing)",
        "Điện toán lưới (Grid computing)",
        "Cloud lai (Hybrid cloud)",
        "Mạng điều khiển bằng phần mềm"
      ],
      e: "Điện toán biên không thay thế mà hoạt động cùng điện toán đám mây; sự phối hợp này tạo nên Fog computing."
    },
    {
      l: 1,
      q: "Ảo hóa là công nghệ then chốt của bao nhiêu trong số 5 đặc điểm của cloud?",
      o: ["4/5 đặc điểm", "5/5 đặc điểm", "3/5 đặc điểm", "2/5 đặc điểm"],
      e: "Theo bài giảng, ảo hóa (Virtualization) là công nghệ then chốt của 4/5 đặc điểm của Cloud."
    },

    // ===== THÔNG HIỂU (16) =====
    {
      l: 2,
      q: "Đặc điểm “Resource pooling” (tổng hợp tài nguyên) của cloud được hiểu như thế nào?",
      o: [
        "Tài nguyên được gộp bằng ảo hóa và phân phát động theo nhu cầu",
        "Khách hàng tự chọn dịch vụ mà không cần liên hệ nhân viên",
        "Hệ thống tự theo dõi, điều chỉnh và báo cáo lượng tài nguyên",
        "Khách dùng dịch vụ ở bất kỳ đâu có trình duyệt và Internet"
      ],
      e: "Resource pooling: kho tài nguyên được tổng hợp (bằng ảo hóa) và phân phát động cho khách theo nhu cầu. Các phương án khác lần lượt là on-demand self-service, measured service, broad network access."
    },
    {
      l: 2,
      q: "Đặc điểm “Rapid elasticity” (khả năng co giãn) mang lại lợi ích gì cho khách hàng?",
      o: [
        "Thay đổi quy mô tài nguyên ngay lập tức, giảm bớt tiền thuê",
        "Biết chính xác vị trí vật lý của tài nguyên đang phục vụ",
        "Sở hữu toàn bộ hạ tầng phần cứng của nhà cung cấp",
        "Không cần kết nối Internet khi sử dụng dịch vụ"
      ],
      e: "Quy mô, số lượng, chủng loại tài nguyên thay đổi ngay theo ý khách; tài nguyên dư được tận dụng phục vụ người khác, khách giảm được tiền thuê."
    },
    {
      l: 2,
      q: "Đặc điểm “Measured service” của cloud có nghĩa là gì?",
      o: [
        "Tự động theo dõi, điều chỉnh tài nguyên tối ưu và ghi lại để báo cáo",
        "Khách hàng tự đo đạc và khai báo lượng tài nguyên đã sử dụng",
        "Tài nguyên được cấp cố định, không đổi trong suốt hợp đồng",
        "Nhân viên nhà cung cấp kiểm tra thủ công định kỳ hằng tháng"
      ],
      e: "Measured service: hệ thống tự động theo dõi và điều chỉnh lượng tài nguyên theo cách tối ưu, đồng thời ghi lại để báo cáo."
    },
    {
      l: 2,
      q: "Về vị trí tài nguyên trong cloud, phát biểu nào đúng?",
      o: [
        "Khách không biết vị trí vật lý nhưng có thể yêu cầu vùng địa lý",
        "Khách luôn biết chính xác máy chủ vật lý đang phục vụ mình",
        "Khách không thể yêu cầu tài nguyên nằm ở vùng địa lý nào",
        "Tài nguyên luôn đặt tại trụ sở của khách hàng thuê dịch vụ"
      ],
      e: "Khách hàng không biết và không quan tâm vị trí vật lý của tài nguyên, tuy nhiên có thể yêu cầu chúng nằm ở vùng địa lý nào."
    },
    {
      l: 2,
      q: "Với mô hình SaaS, người dùng có quyền gì đối với hạ tầng?",
      o: [
        "Không được và không phải quản lý mạng, máy chủ, hệ điều hành",
        "Toàn quyền quản lý hệ điều hành và phần mềm đã cài đặt",
        "Tự cài đặt IDE và máy ảo để phát triển ứng dụng riêng",
        "Kiểm soát toàn bộ hạ tầng cloud của nhà cung cấp"
      ],
      e: "Người dùng SaaS không được/không phải quản lý hạ tầng (mạng, máy chủ, hệ điều hành), chỉ dùng phần mềm qua giao diện web. Toàn quyền hệ điều hành là IaaS."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về quyền của người dùng IaaS?",
      o: [
        "Toàn quyền với hệ điều hành, phần mềm đã cài nhưng không kiểm soát hạ tầng bên dưới",
        "Kiểm soát toàn bộ hạ tầng cloud bên dưới của nhà cung cấp dịch vụ IaaS",
        "Chỉ dùng phần mềm có sẵn qua giao diện web, không được cài thêm gì",
        "Chỉ được dùng công cụ phát triển ứng dụng do nhà cung cấp cấp sẵn"
      ],
      e: "Người dùng IaaS không kiểm soát hạ tầng cloud bên dưới nhưng có toàn quyền với tài nguyên được cấp, hệ điều hành, bộ nhớ và phần mềm đã cài."
    },
    {
      l: 2,
      q: "Điểm khác biệt giữa kiến trúc Hypervisor Type-1 và Type-2 là gì?",
      o: [
        "Type-1 chạy trực tiếp trên phần cứng, Type-2 chạy trên hệ điều hành chủ",
        "Type-1 chạy trên hệ điều hành chủ, Type-2 chạy trực tiếp trên phần cứng",
        "Type-1 không cần phần cứng, Type-2 cần phần cứng chuyên dụng",
        "Type-1 chỉ chạy một máy ảo, Type-2 chạy được nhiều máy ảo"
      ],
      e: "Type-1 (Bare-metal/Native): Hypervisor chạy trực tiếp trên phần cứng. Type-2 (Hosted): Hypervisor chạy trên Host OS và dùng dịch vụ của hệ điều hành."
    },
    {
      l: 2,
      q: "Đâu <b>KHÔNG</b> phải là nhược điểm của mô hình mạng LAN tự cấp tự túc (trước khi có cloud)?",
      o: [
        "Tài nguyên tập trung nên dễ bảo trì, đồng bộ",
        "Mỗi cơ quan một kiểu nên khó tương thích",
        "Chi phí đầu tư, bảo trì, nâng cấp cao",
        "Lãng phí tài nguyên, chất lượng dịch vụ thấp"
      ],
      e: "Tập trung tài nguyên vật lý một chỗ để dễ bảo trì, đồng bộ là ƯU ĐIỂM của Cloud. LAN tự cấp tự túc có nhược điểm: không tương thích, chi phí cao, lãng phí, chất lượng thấp."
    },
    {
      l: 2,
      q: "Vì sao máy ảo dễ sao lưu, sao chép và di chuyển?",
      o: [
        "Vì mỗi máy ảo thực chất chỉ là một tập các file",
        "Vì máy ảo có phần cứng riêng tách biệt hoàn toàn",
        "Vì máy ảo không cần hệ điều hành để hoạt động",
        "Vì máy ảo luôn đặt tại máy tính của người dùng"
      ],
      e: "Máy ảo chỉ là một tập file nên có thể triển khai, sao chép, di chuyển, backup/restore nhanh chóng mà không phải cài đặt lại."
    },
    {
      l: 2,
      q: "Ưu điểm của cloud riêng (Private cloud) là gì?",
      o: [
        "Bảo mật, chủ động trong sử dụng, nâng cấp và quản lý",
        "Phục vụ bất kỳ khách hàng nào có nhu cầu sử dụng",
        "Chi phí thấp nhất do dùng chung với cả cộng đồng",
        "Kết hợp được ưu điểm của cả ba loại cloud còn lại"
      ],
      e: "Private cloud chỉ phục vụ một cơ quan theo hình thức độc quyền, ưu điểm là bảo mật và chủ động. Phục vụ bất kỳ ai là Public cloud."
    },
    {
      l: 2,
      q: "SDN giúp mạng hiệu quả, dễ quản lý hơn nhờ cách tổ chức nào?",
      o: [
        "Tách chức năng quản lý khỏi thiết bị, thiết bị chỉ chuyển tiếp dữ liệu",
        "Mỗi router, switch tự quyết định cách định tuyến theo kiểu phân tán",
        "Bỏ hoàn toàn router và switch, chỉ giữ lại máy chủ điều khiển",
        "Cài phần mềm điều khiển riêng lên từng router để tự quản lý"
      ],
      e: "SDN tách chức năng quản lý khỏi thiết bị mạng (thiết bị chỉ chuyển tiếp dữ liệu) và tập trung quản lý vào controller. Mô hình mỗi router tự quyết định là mô hình phân tán trước đây."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về Điện toán biên (Edge Computing)?",
      o: [
        "Xử lý một phần dữ liệu gần nơi phát sinh rồi mới gửi lên đám mây",
        "Thay thế hoàn toàn điện toán đám mây trong các hệ thống IoT",
        "Gửi toàn bộ dữ liệu thô về Data Center để xử lý tập trung",
        "Chỉ dùng cho các máy chủ đặt trong trung tâm dữ liệu lớn"
      ],
      e: "Edge Computing dịch chuyển tài nguyên tính toán tới gần nơi phát sinh dữ liệu, tiền xử lý tại vùng Biên rồi gửi phần còn lại lên đám mây; không thay thế cloud."
    },
    {
      l: 2,
      q: "Trong mạng LLN, từ “Lossy” phản ánh đặc điểm nào?",
      o: [
        "Kết nối năng lượng thấp, kém tin cậy, gói tin có thể không tới đích",
        "Đường truyền tốc độ rất cao nhưng tiêu thụ nhiều năng lượng",
        "Các nút mạng có CPU, RAM mạnh nên xử lý được nhiều gói tin",
        "Mạng không bao giờ mất gói tin nhờ có đường dẫn dự phòng"
      ],
      e: "Để tiết kiệm năng lượng, LLN dùng chuẩn kết nối năng lượng thấp (IEEE 802.15.4...) nên chất lượng không tin cậy, gói tin chưa chắc tới đích."
    },
    {
      l: 2,
      q: "Giao thức RPL xây dựng cấu trúc mạng dựa trên mô hình nào?",
      o: [
        "Đồ thị phi chu trình hướng đích (DODAG)",
        "Cây khung nhỏ nhất trên toàn mạng",
        "Vòng tròn chuyển thẻ bài (Token Ring)",
        "Đồ thị đầy đủ giữa mọi cặp nút mạng"
      ],
      e: "RPL xây dựng một hoặc nhiều DODAG (Destination Oriented Directed Acyclic Graph), dùng ba gói ICMPv6: DIO, DAO, DIS."
    },
    {
      l: 2,
      q: "Điểm khác nhau giữa xe tự hành cấp độ 3 và cấp độ 4 là gì?",
      o: [
        "Cấp 4 giới hạn ở khu vực nhất định và tự dừng khi phát hiện lỗi",
        "Cấp 4 chỉ cảnh báo va chạm hay lệch làn đường cho người lái",
        "Cấp 3 tự hành hoàn toàn trong mọi điều kiện đường sá",
        "Cấp 3 không có vô-lăng, cấp 4 vẫn cần người lái giám sát"
      ],
      e: "Cấp 3: nếu không thể quyết định, hệ thống báo người lái điều khiển lại. Cấp 4: tự hành cấp cao, giới hạn ở một số khu vực, không có vô-lăng, phát hiện lỗi thì tự dừng."
    },
    {
      l: 2,
      q: "Đặc trưng nào sau đây <b>KHÔNG</b> thuộc các đặc trưng của IoT được nêu trong bài?",
      o: [
        "Tập trung mọi xử lý tại một máy chủ duy nhất",
        "Tính đa dạng và không đồng nhất",
        "Khả năng định danh và kết nối",
        "Khả năng cộng tác và tự hoạt động"
      ],
      e: "Bốn đặc trưng của IoT: đa dạng và không đồng nhất; định danh và kết nối; cộng tác và tự hoạt động; yếu tố bảo mật."
    },

    // ===== VẬN DỤNG (12) =====
    {
      l: 3,
      q: "Một công ty phần mềm muốn lập trình viên phát triển, kiểm thử và triển khai ứng dụng trên cloud mà không phải cài IDE hay máy ảo. Mô hình dịch vụ phù hợp là gì?",
      o: ["PaaS", "SaaS", "IaaS", "SDN"],
      e: "PaaS cung cấp nền tảng phát triển ứng dụng: lập trình viên không phải cài IDE hay máy ảo, hỗ trợ phát triển, kiểm thử, triển khai và vận hành trên cloud."
    },
    {
      l: 3,
      q: "Doanh nghiệp X thuê máy chủ ảo để tự cài hệ điều hành, cơ sở dữ liệu và phần mềm riêng, không muốn mua sắm phần cứng. Doanh nghiệp đang dùng mô hình nào?",
      o: ["IaaS", "SaaS", "PaaS", "Community cloud"],
      e: "IaaS: thuê máy chủ ảo, có toàn quyền cài và chạy hệ điều hành, phần mềm như trên máy chủ vật lý, không tốn chi phí mua sắm phần cứng."
    },
    {
      l: 3,
      q: "Một trường THPT dùng hệ thống học và thi trực tuyến VNPT-Elearning qua trình duyệt, không cài đặt hay quản lý máy chủ. Đây là mô hình nào?",
      o: ["SaaS", "PaaS", "IaaS", "Grid Computing"],
      e: "VNPT-Elearning là ví dụ SaaS: dùng qua giao diện web, không cài đặt, không quản lý hạ tầng."
    },
    {
      l: 3,
      q: "Một ngân hàng cần hạ tầng cloud chỉ phục vụ riêng ngân hàng mình, ưu tiên bảo mật và chủ động quản lý. Nên chọn loại cloud nào?",
      o: ["Private cloud", "Public cloud", "Community cloud", "Hybrid cloud"],
      e: "Private cloud chỉ phục vụ một cơ quan theo hình thức độc quyền, ưu điểm bảo mật, chủ động sử dụng, nâng cấp, quản lý."
    },
    {
      l: 3,
      q: "Nhiều bệnh viện cùng dùng chung một hạ tầng cloud chỉ phục vụ các đơn vị trong ngành y tế. Đây là loại cloud nào?",
      o: ["Community cloud", "Private cloud", "Public cloud", "Hybrid cloud"],
      e: "Community cloud chỉ phục vụ một cộng đồng người dùng xác định (ở đây là ngành y tế)."
    },
    {
      l: 3,
      q: "Một shop online thuê thêm máy chủ trong đợt khuyến mãi cuối năm, hết đợt thì giảm về như cũ để tiết kiệm chi phí. Đặc điểm nào của cloud được khai thác?",
      o: [
        "Rapid elasticity",
        "Resource pooling",
        "Broad network access",
        "Measured service"
      ],
      e: "Rapid elasticity: quy mô tài nguyên thay đổi ngay theo ý khách, giúp khách giảm bớt tiền thuê khi không cần."
    },
    {
      l: 3,
      q: "Máy chủ vật lý bị hỏng, quản trị viên nhanh chóng chuyển các máy ảo sang máy chủ khác và hệ thống tiếp tục chạy. Điều này thể hiện lợi ích nào của ảo hóa?",
      o: [
        "Quản lý đơn giản, dễ di chuyển máy ảo",
        "Tài nguyên ảo có năng lực lớn hơn vật lý",
        "Không còn cần đến phần cứng vật lý nữa",
        "Máy ảo không bao giờ gặp bất kỳ sự cố nào"
      ],
      e: "Lợi ích ảo hóa: quản lý đơn giản – khi máy chủ vật lý hỏng, dễ dàng chuyển máy ảo sang máy chủ vật lý khác. Máy ảo vẫn chạy trên phần cứng thật."
    },
    {
      l: 3,
      q: "Sinh viên cài một phần mềm ảo hóa lên Windows đang dùng để chạy thêm hệ điều hành Linux. Đây là kiến trúc ảo hóa nào?",
      o: [
        "Hosted Hypervisor (Type-2)",
        "Bare-metal Hypervisor (Type-1)",
        "Native Hypervisor (Type-1)",
        "Điện toán biên (Edge Computing)"
      ],
      e: "Hypervisor chạy trên nền hệ điều hành chủ (Windows) là kiến trúc Hosted (Type-2). Bare-metal và Native đều là tên gọi của Type-1."
    },
    {
      l: 3,
      q: "Một nhà máy có hàng nghìn cảm biến; việc gửi toàn bộ dữ liệu về Data Center gây nghẽn đường truyền. Giải pháp phù hợp là gì?",
      o: [
        "Điện toán biên, tiền xử lý dữ liệu gần cảm biến",
        "Gửi dữ liệu thô về nhiều Data Center khác nhau",
        "Thay toàn bộ mạng cảm biến bằng mạng LAN có dây",
        "Chuyển toàn bộ cảm biến sang mạng ngang hàng"
      ],
      e: "Edge Computing xử lý tại chỗ một phần dữ liệu ở vùng Biên gần nguồn phát sinh, giảm ách tắc đường truyền và tăng an toàn thông tin."
    },
    {
      l: 3,
      q: "Quản trị viên mạng muốn đặt chính sách định tuyến tại một nơi duy nhất thay vì cấu hình từng router, switch. Nên áp dụng kiến trúc nào?",
      o: ["SDN", "IoT", "Edge Computing", "Grid Computing"],
      e: "SDN tập trung quản lý vào controller: admin chỉ cần thiết lập chính sách tại trung tâm thay vì can thiệp từng router hay switch."
    },
    {
      l: 3,
      q: "Một chiếc quạt mini được quảng cáo là “quạt thông minh” nhưng chỉ chạy bằng pin, không có cảm biến và không kết nối mạng. Nhận định nào đúng?",
      o: [
        "Không phải thiết bị thông minh vì không cảm biến, không kết nối mạng",
        "Là thiết bị thông minh vì có kích thước nhỏ gọn và dùng pin sạc",
        "Là thiết bị thông minh vì sạc được qua cổng USB của laptop",
        "Là thiết bị IoT vì được bán trong danh mục nhà thông minh"
      ],
      e: "Thiết bị thông minh phải có cảm biến, khả năng kết nối mạng và tự hoạt động. Nhỏ gọn, dùng pin hay danh mục bán hàng không làm thiết bị trở nên “thông minh”."
    },
    {
      l: 3,
      q: "Một tuyến xe buýt thử nghiệm chỉ chạy trên lộ trình cố định đã lập bản đồ HD Map, không có vô-lăng, tự dừng khi phát hiện lỗi. Xe này thuộc cấp độ tự hành nào?",
      o: ["Cấp độ 4", "Cấp độ 2", "Cấp độ 3", "Cấp độ 5"],
      e: "Cấp 4: tự hành cấp cao nhưng giới hạn ở một số khu vực, không có vô-lăng, phát hiện lỗi thì tự dừng. Cấp 5 tự hành hoàn toàn, không giới hạn khu vực."
    }
  ]
});
