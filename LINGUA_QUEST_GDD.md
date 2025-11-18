# LINGUA QUEST: The City of Words
## Game Design Document (GDD)

---

## PHẦN 1: KHOẠCH & TẦM NHÌN (VISION & PLANNING)

### 📋 Tổng Quan Dự Án

**Tên Dự Án:** Lingua Quest: The City of Words

**Mục Tiêu Chính:** Phát triển ứng dụng học ngôn ngữ hấp dẫn dựa trên cơ chế Gamification, tập trung vào việc xây dựng một "Thành phố Từ vựng" ảo mà người chơi là người quản lý/xây dựng.

**Ngôn Ngữ Học Tập Ban Đầu:** Tiếng Anh (English)

**Đối Tượng Mục Tiêu:**
- Người học ở trình độ sơ cấp (A1-A2)
- Người học trung cấp (B1)
- Độ tuổi: 18-45 tuổi (ưu tiên 25-35 tuổi)
- Người muốn học từ vựng và ngữ pháp qua game thay vì phương pháp truyền thống

---

### 1️⃣ THIẾT KẾ TRẢI NGHIỆM (UX/UI CONCEPT)

#### 3 Yếu Tố Cốt Lõi Tạo Cảm Giác "Thành Phố" & "Phiêu Lưu"

**YẾU TỐ 1: Bản Đồ Thành Phố Interactif (Interactive City Map)**
- **Mô Tả:** Giao diện chính hiển thị một bản đồ isometric 2.5D của thành phố từ vựng. Người chơi thấy các tòa nhà, con đường, và khu vực khác nhau.
- **Chức Năng:** Khi người chơi chạm/click vào một khu vực, họ sẽ vào các mini-game tương ứng. Mỗi khu vực có biểu tượng riêng (ví dụ: "Grammar Bridge" có cầu, "Listening Lighthouse" có ngọn hải đăng).
- **Tác Dụng Tâm Lý:** Tạo cảm giác khám phá và tiến triển rõ ràng (không chỉ là danh sách bài học).

**YẾU TỐ 2: Nhân Vật Chính & Quả Cầu Hộ Mệnh (Avatar & Spirit Companion)**
- **Mô Tả:** Người chơi tạo một nhân vật (avatar) đại diện cho mình trong thành phố. Bên cạnh đó là một "quả cầu hộ mệnh" nhỏ (Spirit Companion) - một sinh vật hoạt hình vui tính theo dõi tiến độ của người chơi.
- **Chức Năng:** 
  - Avatar giúp tạo sự gắn bó cảm xúc.
  - Spirit Companion cung cấp phản hồi ngay lập tức ("Tuyệt vời!", "Bạn sắp là chuyên gia!", "Hãy luyện thêm từ này").
- **Tác Dụng Tâm Lý:** Làm trò chơi cảm thấy có "mục đích" và "mối quan hệ cá nhân".

**YẾU TỐ 3: Thanh Tiến Độ Nhân Vật & Phim Tắt Thành Tích (Character Progression Bar & Achievement Animations)**
- **Mô Tả:** 
  - Thanh tiến độ cho mỗi khu vực (Zone) hiển thị % hoàn thành. Khi đạt 100%, người chơi mở khóa khu vực tiếp theo.
  - Khi người chơi đạt các mốc quan trọng (hoàn thành zone, kiếm đủ tiền), xuất hiện phim tắt ngắn (0.5-2 giây) của nhân vật, ví dụ: nhân vật nâng tay chúc mừng, thành phố thêm ánh sáng, v.v.
- **Tác Dụng Tâm Lý:** Cảm giác "thành công" rõ ràng, tạo động lực tiếp tục.

---

### 2️⃣ CẤU TRÚC GAME: 4 CẤP ĐỘ (LEVELS/ZONES) ĐẦU TIÊN

| **Zone** | **Tên Zone** | **Chủ Đề Từ Vựng** | **Mini-Game** | **Mục Tiêu** | **Độ Khó** |
|----------|-------------|-------------------|--------------|------------|----------|
| **Zone 1** | The Grammar Bridge | Ngữ pháp cơ bản (Động từ "to be", Danh từ, Tính từ) | Grammar Bridge | Chọn câu trả lời đúng về cấu trúc ngữ pháp | ⭐ Dễ |
| **Zone 2** | The Listening Lighthouse | Kỹ năng nghe & Phát âm cơ bản | Listening Lighthouse | Lắng nghe và chọn từ/cụm từ đúng | ⭐⭐ Trung bình |
| **Zone 3** | The Word Arena | Từ vựng chủ đề Cuộc Sống Hàng Ngày (Daily Life) | Word Arena | Cuộc đua tốc độ: nối từ với định nghĩa hoặc gõ từ nhanh nhất | ⭐⭐ Trung bình |
| **Zone 4** | The Dialogue Train | Kỹ năng giao tiếp cơ bản (Greetings, Small Talk) | Dialogue Train | Sắp xếp các câu hội thoại bị xáo trộn theo thứ tự logic | ⭐⭐⭐ Khó |

#### Chi Tiết Từng Zone

**🌉 ZONE 1: The Grammar Bridge**
- **Vị Trí Trên Bản Đồ:** Phía Tây, là cổng vào thành phố (vì người chơi bắt đầu từ đây).
- **Từ Vựng:** To be (am/is/are), Danh từ, Tính từ cơ bản.
- **Ví Dụ Câu Hỏi:** "I ___ a student." Chọn: A) are, B) am, C) is.
- **Phần Thưởng:** 50 XP, 10 Gold Coins (tiền vàng).

**🔦 ZONE 2: The Listening Lighthouse**
- **Vị Trí Trên Bản Đồ:** Phía Bắc (biểu tượng ngọn hải đăng).
- **Từ Vựng:** Phát âm, số, màu sắc, các vật dụng hàng ngày.
- **Ví Dụ:** Nghe âm thanh "hello", chọn từ đúng từ 4 lựa chọn.
- **Phần Thưởng:** 60 XP, 15 Gold Coins.

**⚔️ ZONE 3: The Word Arena**
- **Vị Trí Trên Bản Đồ:** Phía Đông (giống sân vận động).
- **Từ Vựng:** Cuộc sống hàng ngày (Morning routine, Foods, Animals, Clothes).
- **Ví Dụ:** Người chơi thấy 5 từ cần nối với 5 hình ảnh trong 60 giây. Nhanh nhất = điểm cao.
- **Phần Thưởng:** 80 XP, 20 Gold Coins (nếu hoàn thành dưới 40 giây: +30 Bonus XP).

**🚂 ZONE 4: The Dialogue Train**
- **Vị Trí Trên Bản Đồ:** Phía Nam (ga tàu).
- **Từ Vựng:** Hội thoại cơ bản (Hi, how are you?, Nice to meet you, etc.).
- **Ví Dụ:** 5 câu hội thoại bị xáo trộn. Người chơi phải sắp xếp theo thứ tự để tạo một cuộc đàm thoại hợp lý.
- **Phần Thưởng:** 100 XP, 25 Gold Coins.

---

### 3️⃣ HỆ THỐNG TIỀN TỆ & PHẦN THƯỞNG

#### 2 Loại Tiền Tệ Ảo

| **Tiền Tệ** | **Tên** | **Biểu Tượng** | **Cách Kiếm** | **Cách Tiêu** | **Tỷ Giá** |
|-------------|--------|---------------|-------------|-------------|----------|
| **Gold Coins** | Vàng | 🪙 | Hoàn thành mini-game (40-100 coins/game), Streak hàng ngày (20 coins/ngày) | Mua công trình xây dựng thành phố (50-500 coins), mua hint (gợi ý) cho các game khó (5-20 coins) | 1 Gold = 1 đơn vị cơ bản |
| **Gems** | Ngọc | 💎 | Premium (mua thực tế), Đạt milestone (500 XP/zone = 5 gems), Sự kiện hàng ngày (Daily login: 2 gems) | Mua công trình đặc biệt (300-1000 gems), mở khóa nhân vật bổ sung, Revive khi thua trong Arena | 1 Gem = 10 Gold Coins (gợi ý) |

#### Cách Người Chơi Kiếm & Tiêu Tiền

**Kiếm Tiền:**
1. Hoàn thành các mini-game (chính)
2. Hoàn thành daily mission ("Chơi ít nhất 3 game hôm nay" = 50 Gold)
3. Chuỗi ngày liên tiếp (Streak bonus: ngày 3 = 20 Gold, ngày 7 = 50 Gold)
4. Thành tích đặc biệt ("Chiến thắng 5 trận liên tiếp trong Arena" = 100 Gold + 10 Gems)

**Tiêu Tiền:**
1. Xây dựng công trình (50-500 Gold, 300-1000 Gems)
2. Mua hint/gợi ý cho các câu hỏi khó (5 Gold/hint, hoặc 1 Gem cho vô hạn gợi ý trong 24h)
3. Mua cosmetics cho avatar (mũ, áo, v.v. - 100-300 Gold)
4. Revive trong Word Arena (khi thua: 10 Gold hoặc 1 Gem)

---

### 4️⃣ KPIs (CHỈ SỐ THÀNH CÔNG)

#### 3 KPI Quan Trọng Nhất

| **STT** | **KPI** | **Định Nghĩa** | **Mục Tiêu** | **Đo Lường** |
|--------|--------|--------------|------------|------------|
| **1** | **Tỷ Lệ Giữ Chân Người Dùng (Retention Rate)** | % người chơi tiếp tục sử dụng app sau 7, 30, 90 ngày | Day-7 Retention ≥ 45%, Day-30 ≥ 30%, Day-90 ≥ 15% | Theo dõi hàng ngày qua Firebase Analytics |
| **2** | **Thời Gian Học Trung Bình Hàng Ngày (DAU - Daily Active Users & Avg. Session Length)** | Trung bình người chơi dành bao nhiêu phút/ngày trên app | ≥ 15 phút/session, ≥ 2 session/ngày | Sử dụng Firebase Analytics + Custom Events |
| **3** | **Tỷ Lệ Hoàn Thành Bài Học (Zone Completion Rate)** | % người chơi hoàn thành toàn bộ một zone (tất cả 5 level trong zone) | Zone-1 completion ≥ 80%, Zone-2 ≥ 60%, Zone-3 ≥ 40% | Theo dõi event "zone_completed" |

#### KPIs Bổ Sung

- **ARPU (Average Revenue Per User):** Doanh thu trung bình/người chơi/tháng ≥ $2 USD
- **Conversion Rate (Free → Premium):** ≥ 3-5% người chơi miễn phí chuyển thành trả phí
- **NPS (Net Promoter Score):** ≥ 50 (từ in-app survey)

---

### 5️⃣ TO-DO LIST: 5 HÀNH ĐỘNG ĐẦU TIÊN

| **STT** | **Hành Động** | **Thời Hạn** | **Trách Nhiệm** | **Output** |
|--------|-------------|-----------|------------------|----------|
| **1** | **Nghiên Cứu Thị Trường & Phân Tích Đối Thủ** | Tuần 1-2 | Product Manager | Báo cáo: Duolingo vs Busuu vs Memrise - ưu điểm, nhược điểm, lỗ hổng thị trường |
| **2** | **Lập Danh Sách 1000 Từ Vựng Cốt Lõi A1-B1** | Tuần 2-3 | Content Creator | CSV file với 1000 từ, phát âm, định nghĩa, ví dụ câu (Tiếng Anh - Tiếng Việt) |
| **3** | **Phác Thảo Nhân Vật Chính & Spirit Companion** | Tuần 3 | UI/UX Designer | Concept art: 3-5 design cho avatar, 3-5 design cho Spirit Companion, Naming (tên gợi ý) |
| **4** | **Tạo Prototype UI Interactif (Figma/Adobe XD)** | Tuần 4-5 | UI/UX Designer | Wireframe + Hi-fi mockup: Main Map, Mini-game screens (Grammar Bridge, Arena), Store |
| **5** | **Xác Định Công Nghệ Stack & Khởi Tạo Dự Án** | Tuần 5 | Tech Lead | Decision: Unity + Firebase vs React Native, Github repo, Database schema (Firebase Firestore) |

---

---

## PHẦN 2: CƠ CHẾ GAME (GAME MECHANICS & CONTENT)

### 1️⃣ MÔ TẢ CHI TIẾT 4 MINI-GAME

#### 🌉 MINI-GAME 1: "The Grammar Bridge"

**Mục Tiêu:** Luyện tập ngữ pháp cơ bản (Động từ "to be", Danh từ, Tính từ).

**Cách Chơi:**
1. Người chơi nhìn thấy một câu không hoàn chỉnh với 1-2 chỗ trống.
   - Ví dụ: "She ___ a teacher." hoặc "They are ___ students."
2. Dưới câu là 4 lựa chọn trắc nghiệm (A, B, C, D).
3. Người chơi nhấn vào đáp án đúng. Nếu đúng → tiếp tục. Nếu sai → thông báo "Lỗi", hiển thị phần giải thích, người chơi có 1 lần retry.

**Cơ Chế Sai/Đúng:**
- **✅ Đúng:** Hiệu ứng âm thanh tích cộng (ding!), câu chữ chuyển màu xanh, người chơi nhận +10 XP, +2 Gold.
- **❌ Sai:** Hiệu ứng âm thanh tiêu cực (bzz), câu chữ chuyển màu đỏ. Sau 1 giây, hiển thị lời giải thích: "Chủ ngữ 'She' (nữ số ít) dùng với 'is', không phải 'are'." → Người chơi có 1 lần retry với cơ hội sửa đáp án.
- **Trên 5 sai:** Mini-game kết thúc, hiển thị: "Hãy thử lại!" với nút "Restart" hoặc "Hint" (1 Gold/hint).

**Hình Ảnh Hiển Thị Trên Màn Hình:**
```
┌─────────────────────────────────────┐
│ The Grammar Bridge - Level 1        │
│ Progress: ████░░░░░░ 5/10          │
├─────────────────────────────────────┤
│                                     │
│  She ___ a teacher.                │
│                                     │
│  A) are       B) am                 │
│  C) is        D) been              │
│                                     │
│  [SELECT AN ANSWER]                │
│                                     │
├─────────────────────────────────────┤
│ XP: +10 | Coins: +2 🪙             │
└─────────────────────────────────────┘
```

**Phần Thưởng:** 
- Hoàn thành 10 câu = 100 XP + 20 Gold + mở khóa level tiếp theo.
- Nếu sai ≤ 2 lần = +20 Bonus XP.

---

#### 🔦 MINI-GAME 2: "The Listening Lighthouse"

**Mục Tiêu:** Luyện kỹ năng nghe, phát âm, và nhận diện từ từ âm thanh.

**Cách Chơi:**
1. Người chơi nhấn nút "Play Sound" 🔊.
2. Ứng dụng phát âm một từ hoặc cụm từ Tiếng Anh (Native speaker), độ dài 1-3 giây.
3. Người chơi lựa chọn từ/cụm từ đúng từ 4 hình ảnh hoặc 4 chữ viết.
   - **Phương pháp 1 (Visual):** Nghe từ "apple", chọn từ 4 hình ảnh (quả táo, chuối, cam, dâu).
   - **Phương pháp 2 (Text):** Nghe từ "beautiful", chọn từ 4 chữ viết ("beautiful", "beatiful", "beutiful", "beutyful").

**Độ Dài Âm Thanh:** 
- Level 1-3: 1-2 giây
- Level 4-7: 2-3 giây + có kèm theo một câu đơn giản (ví dụ: "This is a _____")
- Level 8-10: 3 giây, người chơi nghe toàn bộ câu, không có hint.

**Hình Thức Câu Hỏi:**
- **Loại 1:** Từ đơn (Single Word Recognition) - 70% bài
- **Loại 2:** Cụm từ (Phrase Recognition) - 20% bài
- **Loại 3:** Câu hoàn chỉnh (Sentence Recognition) - 10% bài (chỉ ở Level 8-10)

**Cơ Chế Phát Âm:**
- Người chơi có thể nhấn lại nút 🔊 tối đa 2 lần (lần thứ 3 phải trả 1 Gem hoặc skip).
- Sau khi chọn đáp án đúng, ứng dụng phát lại âm thanh + hiển thị phiên âm IPA (ví dụ: /ˈæpl̩/).

**Hình Ảnh Hiển Thị:**
```
┌─────────────────────────────────────┐
│ The Listening Lighthouse - Level 3  │
│ Progress: ███████░░░ 7/10          │
├─────────────────────────────────────┤
│                                     │
│         [🔊 PLAY SOUND]  (2/3)     │
│                                     │
│  What word did you hear?           │
│                                     │
│  [🍎 Apple] [🍌 Banana]            │
│  [🍊 Orange][🍓 Strawberry]        │
│                                     │
├─────────────────────────────────────┤
│ /ˈæpl̩/ (Phiên âm)                   │
│ XP: +15 | Coins: +3 🪙             │
└─────────────────────────────────────┘
```

**Phần Thưởng:**
- Hoàn thành 10 câu = 120 XP + 30 Gold.
- Hoàn thành không sai lần nào = +30 Bonus XP.

---

#### ⚔️ MINI-GAME 3: "The Word Arena"

**Mục Tiêu:** Luyện từ vựng ở tốc độ cao, tạo cảm giác cạnh tranh thú vị.

**Cách Chơi:**
- Người chơi sẽ gặp một trong 3 chế độ:

**Chế Độ A: Matching Challenge (Nối Từ)**
1. Bên trái có 5 từ Tiếng Anh, bên phải có 5 hình ảnh/định nghĩa bị xáo trộn.
2. Người chơi kéo từ sang hình/định nghĩa đúng (Drag & Drop hoặc nhấn cặp).
3. Mỗi cặp đúng = +5 XP. Mỗi cặp sai = -1 XP (không sao, tiếp tục).
4. Mục tiêu: Hoàn thành trong 60 giây. Nhanh hơn 40 giây = Bonus XP cao.

**Chế Độ B: Speed Typing (Gõ Từ Nhanh)**
1. Hiển thị 1 hình ảnh + định nghĩa ngắn bằng Tiếng Anh.
   - Ví dụ: Hình quả táo + "A red fruit, sweet and healthy."
2. Người chơi phải gõ từ đúng trong hộp text.
3. Mỗi từ đúng = +10 XP. Mỗi lỗi chính tả = -2 XP (hệ thống chỉnh sửa tự động sau 2 ký tự sai).
4. Mục tiêu: 10 từ trong 60 giây.

**Chế Độ C: VS AI (Đối Kháng với AI)**
1. Người chơi và AI đứng đối mặt (giao diện như 2 nhân vật).
2. Cùng lúc, cả hai đều nhìn thấy 1 câu hỏi.
3. Ai trả lời đúng + nhanh hơn sẽ giành chiến thắng trong round đó.
4. Best of 3 rounds = Xác định người chiến thắng.
5. Chiến thắng = +50 XP + 15 Gold + 1 Victory Medal 🏅.

**Cơ Chế Độ Khó:**
- Level 1-3: Matching, 60 giây, từ quen thuộc.
- Level 4-6: Speed Typing, 60 giây, từ trung bình.
- Level 7-10: VS AI, 3 rounds, từ khó + các chế độ lẫn lộn.

**Hình Ảnh Hiển Thị (Chế Độ VS AI):**
```
┌──────────────────────────────────────┐
│ The Word Arena - VS AI (Best of 3)   │
├──────────────────────────────────────┤
│  You: ⭐⭐⭐         AI: ⭐⭐        │
│  [👤 Avatar] vs [🤖 AI]             │
│                                      │
│  Round 1/3                           │
│  Question: What is the opposite of  │
│  "hot"?                              │
│                                      │
│  [Your Input: _______] [Submit]     │
│                                      │
│  Time: 30 sec                        │
├──────────────────────────────────────┤
│ XP: +50 | Coins: +15 🪙 | 🏅 Victory│
└──────────────────────────────────────┘
```

**Phần Thưởng:**
- Matching: 50 XP + 10 Gold (cơ bản), +20 Bonus nếu dưới 40s.
- Speed Typing: 100 XP + 20 Gold (cơ bản), +30 Bonus nếu hoàn thành 10 từ.
- VS AI: 150 XP + 50 Gold (nếu thắng), 75 XP + 15 Gold (nếu thua).

---

#### 🚂 MINI-GAME 4: "The Dialogue Train"

**Mục Tiêu:** Luyện kỹ năng giao tiếp, hiểu logic của hội thoại, và cải thiện khả năng sử dụng câu.

**Cách Chơi:**
1. Người chơi nhìn thấy 5 câu hội thoại (thường là 2 người nói) bị **xáo trộn thứ tự**.
   - Ví dụ:
     - "Nice to meet you too!"
     - "Hi, I'm John. What's your name?"
     - "Hi! My name is Sarah."
     - "Nice to meet you, Sarah."
     - "Where are you from?"

2. Người chơi phải **kéo từng câu** vào vị trí đúng để tạo hội thoại logic.

3. Hệ thống **tự động kiểm tra** khi người chơi sắp xếp xong. Nếu đúng → Tiếp tục. Nếu sai → Hiển thị lần lượt 3 hint:
   - **Hint 1:** "John nói trước, Sarah trả lời sau." (gợi ý người nói)
   - **Hint 2:** "Hỏi tên trước khi nói 'Nice to meet you'." (gợi ý logic)
   - **Hint 3:** Hiện câu đúng ở vị trí (giải đáp).

4. Mục tiêu: Sắp xếp đúng toàn bộ hội thoại. Số hint dùng = Bonus XP giảm.

**Ứng Dụng Thực Tế:**
- Ứng dụng phát âm toàn bộ hội thoại sau khi sắp xếp đúng, giúp người chơi học cách phát âm tự nhiên.
- Hiển thị thời gian suy nghĩ (nếu < 30s = "Quick thinker!" + bonus).

**Hình Ảnh Hiển Thị:**
```
┌──────────────────────────────────────┐
│ The Dialogue Train - Level 2         │
│ Progress: ██████░░░░ 6/10           │
├──────────────────────────────────────┤
│ Arrange the dialogue in correct order│
│                                      │
│ [1. Hi, I'm John. What's ur name?] │
│ [2. Nice to meet you, Sarah.]      │
│ [3. Hi! My name is Sarah.]         │
│ [4. Nice to meet you too!]         │
│ [5. Where are you from?]           │
│                                      │
│ [PLAY DIALOGUE] 🔊                 │
├──────────────────────────────────────┤
│ Time: 45 sec | Hints Used: 1/3     │
│ XP: +120 | Coins: +25 🪙           │
└──────────────────────────────────────┘
```

**Cơ Chế Độ Khó:**
- Level 1-2: 3 câu, quen thuộc (Greetings).
- Level 3-5: 5 câu, chủ đề bình thường.
- Level 6-10: 7 câu, hội thoại dài hơn, phức tạp hơn.

**Phần Thưởng:**
- Hoàn thành 1 cấp = 120 XP + 25 Gold.
- Nếu không dùng hint = +50 Bonus XP.
- Nếu hoàn thành trong 30s = +30 Bonus XP.

---

### 2️⃣ CƠ CHẾ "HỒI TƯỞNG" (SPACED REPETITION SYSTEM - SRS)

#### Tên Cơ Chế: **"Memory Vault" (Kho Ký Ức)**

**Giới Thiệu:**
Trong thành phố từ vựng, "Memory Vault" là một tòa nhà hình như kho báu dưới lòng đất, nơi hệ thống tự động lưu trữ các từ vựng/ngữ pháp mà người chơi học sai hoặc quên.

**Cách Hoạt Động:**

**Bước 1: Phát Hiện**
- Mỗi khi người chơi trả lời sai 1 câu trong bất kỳ mini-game nào, từ/cụm từ đó tự động được **gắn tag "Forgot"** và lưu vào Memory Vault.
- Ví dụ: Người chơi trả lời sai "The opposite of hot is ___" → Từ "cold" được lưu vào Vault.

**Bước 2: Lên Lịch Lặp Lại (SRS Timeline)**
- Từ được lặp lại theo lịch trình SRS chuẩn:
  - **Lần 1:** 1 ngày sau lần sai
  - **Lần 2:** 3 ngày sau lần 1
  - **Lần 3:** 7 ngày sau lần 2
  - **Lần 4:** 14 ngày sau lần 3
  - **Lần 5:** 30 ngày sau lần 4 → Nếu vẫn đúng → **Chuyển sang "Mastered"** ✓

**Bước 3: Thông Báo & Gợi Nhắc**
- Hàng ngày, hệ thống đếm số từ cần ôn tập trong Vault (ví dụ: "3 words to review today").
- Nếu người chơi mở app → Nhìn thấy badge "Memory Vault: 3️⃣" trên thanh điều hướng.
- Người chơi có thể nhấn để vào "Memory Vault Mode" (chế độ ôn tập).

**Bước 4: Memory Vault Mode**
- Giao diện đơn giản: Từ từ Memory Vault hiển thị lần lượt.
- Người chơi **nhấn "I Know" hoặc "I Forgot"**:
  - ✅ **I Know:** Từ được xem là "correct" lần này. Nếu đúng 5 lần liên tiếp → chuyển thành "Mastered".
  - ❌ **I Forgot:** Từ được reset lại, lặp lại từ ngày 1.

**Hình Ảnh Memory Vault Mode:**
```
┌──────────────────────────────────────┐
│ Memory Vault - Daily Review          │
│ 3 words to review today             │
├──────────────────────────────────────┤
│                                      │
│  Word: "cold"                        │
│  Definition: opposite of hot         │
│  Example: "It is very cold today."  │
│                                      │
│  Day 1/1 (Retry)                     │
│                                      │
│  [I Forgot] [I Know]                │
│                                      │
├──────────────────────────────────────┤
│ Progress: Word 1/3                   │
│ XP: +5 per word | Coins: +1         │
└──────────────────────────────────────┘
```

**Phần Thưởng:**
- Mỗi từ "I Know" = +5 XP, +1 Gold
- Hoàn thành toàn bộ Daily Review = +50 Bonus XP

**Lợi Ích:**
- Đảm bảo từ vựng được lặp lại đúng lúc.
- Tránh quên sau 1 lần học.
- Tạo cảm giác "chủ động nhớ" thay vì bị động.

---

### 3️⃣ TÍNH NĂNG XÂY DỰNG THÀNH PHỐ (CITY BUILDING)

#### 3 Loại Công Trình & Lợi Ích Giáo Dục

| **Tên Công Trình** | **Biểu Tượng** | **Chi Phí** | **Thời Gian Xây** | **Lợi Ích** | **Mô Tả** |
|----------|--------|----------|-------------|---------|----------|
| **Knowledge Library (Thư Viện Kiến Thức)** | 📚 | 150 Gold | 2 giờ | +15% XP từ toàn bộ mini-games | Mỗi tòa nhà giúp tăng XP khi chơi bất kỳ game nào. Tối đa 3 thư viện = +45% XP. |
| **Motivation Temple (Đền Động Lực)** | 🏛️ | 200 Gold / 50 Gems | 4 giờ | +1 Daily Streak Bonus ngày (thêm 10 Gold/ngày nếu đăng nhập liên tục) | Giúp người chơi duy trì thói quen hàng ngày. Bắt đầu "streak counter" không bị reset nếu bỏ 1 ngày. |
| **Vocabulary Garden (Vườn Từ Vựng)** | 🌳 | 100 Gold | 1 giờ | +10% XP từ mini-games trong 1 Zone cụ thể (người chơi chọn). Được giải phóng mỗi 7 ngày. | Giúp người chơi boost điểm trong zone yêu thích. Mỗi Garden tương ứng 1 Zone. |

#### Chi Tiết Xây Dựng

**Cách Mua & Xây:**
1. Người chơi mở giao diện "City Store" (có icon 🏗️ trên bản đồ).
2. Chọn công trình muốn mua.
3. Nếu có đủ tiền → Nhấn "Build". Nếu không → Gợi ý cách kiếm tiền ("Play 5 more games to earn 150 Gold").
4. Công trình bắt đầu xây (countdown timer).
5. Khi xây xong → Công trình xuất hiện trên bản đồ, hiệu ứng pháo hoa + âm thanh vui tươi.

**Giao Diện City Store:**
```
┌──────────────────────────────────────┐
│ City Store - Build Your City!        │
│ Your Gold: 450 🪙 | Gems: 12 💎     │
├──────────────────────────────────────┤
│                                      │
│ 📚 Knowledge Library                │
│ Cost: 150 Gold | Time: 2 hours      │
│ Benefit: +15% XP everywhere         │
│ [YOU OWN 1/3]                       │
│ [BUILD ANOTHER] [DETAILS]           │
│                                      │
│ 🏛️ Motivation Temple                 │
│ Cost: 200 Gold / 50 Gems            │
│ Benefit: +Streak Forgiveness        │
│ [YOU OWN 0/1]                       │
│ [BUILD] [DETAILS]                   │
│                                      │
│ 🌳 Vocabulary Garden (Zone 1)       │
│ Cost: 100 Gold | Time: 1 hour       │
│ Benefit: +10% XP Zone 1             │
│ [YOU OWN 1/4]                       │
│ [BUILD ANOTHER]                     │
│                                      │
└──────────────────────────────────────┘
```

---

### 4️⃣ TÍNH NĂNG KHẨN CẤP (RETENTION FEATURE): "Legendary Expedition"

#### Tên Tính Năng: **"Legendary Expedition" (Cuộc Thám Hiểm Huyền Thoại)**

**Mục Tiêu:** Tạo loop tâm lý mạnh để người chơi quay lại app vào ngày 1, 3, 7 đầu tiên.

#### Cách Hoạt Động:

**Day 1 - "The First Step" (Bước Đầu Tiên)**
- Người chơi hoàn thành Mini-game đầu tiên (The Grammar Bridge).
- **Reward:** 
  - Unlock "Legendary Expedition" (tính năng mới)
  - +50 Bonus XP
  - 🎁 Mystery Box (Hộp Quà Bí Ẩn) - chứa 1 cosmetic avatar ngẫu nhiên (mũ, giày, v.v.)
  - Unlock **"Day 3 Challenge"** (gợi ý về điều sắp tới)

**Day 3 - "The Explorer's Path" (Con Đường Thám Hiểm)**
- Nếu người chơi **quay lại app vào ngày thứ 3** (cộng ngày 1, 2 liên tiếp):
  - **Spin the Fortune Wheel** 🎡 - Người chơi quay vòng quay may mắn:
    - 50% chance: 200 Gold
    - 30% chance: 1 Gem + 100 Gold
    - 15% chance: 500 Gold (hiếm)
    - 5% chance: 5 Gems (cực hiếm)
  - Unlock new mini-game **"Daily Challenge Mode"** (chế độ thử thách hàng ngày, khó hơn, phần thưởng cao hơn).
  - **Streak Notification:** "3-Day Streak! Keep going! 🔥"

**Day 7 - "The Master Returns" (Người Thạo Phương Trở Lại)**
- Nếu người chơi **liên tục quay lại trong 7 ngày** (Day 1, 2, 3, 4, 5, 6, 7):
  - **Special Legendary Reward:**
    - 1000 Gold + 10 Gems (quà lớn)
    - Unlock special cosmetic avatar: "Legendary Traveler" outfit (trang phục huyền thoại)
    - Unlock **"Weekly Leaderboard"** (so sánh với người chơi khác)
    - Email/Notification: "You've completed Day 7 Challenge! 🏆 You're officially a Lingua Quest Explorer!"
  - **Bonus:** Người chơi được tặng **1 Free Week of Premium** (nếu ứng dụng có premium).

#### Giao Diện "Legendary Expedition"

**Main Screen (Màn Chính):**
```
┌──────────────────────────────────────┐
│ 🗺️ Legendary Expedition              │
│ Day 1 ✅ | Day 2 ✅ | Day 3 ✅      │
│ Day 4 ✅ | Day 5 ✅ | Day 6 ✅      │
│ Day 7 🔒 (Tomorrow!)                │
├──────────────────────────────────────┤
│                                      │
│ Current Streak: 🔥 6 DAYS           │
│ Next Reward (Day 7): 1000 Gold      │
│                                      │
│ [CONTINUE PLAYING]                  │
│                                      │
├──────────────────────────────────────┤
│ Total Rewards Earned:                │
│ 💰 350 Gold | 💎 2 Gems             │
│ 👕 1 Cosmetic Unlocked              │
└──────────────────────────────────────┘
```

**Day 3 - Fortune Wheel:**
```
┌──────────────────────────────────────┐
│ 🎡 Spin the Fortune Wheel!          │
│ Day 3 Special Reward                │
├──────────────────────────────────────┤
│         [SPIN NOW]                  │
│                                      │
│           🎡 Spin!                  │
│      (Sections with rewards)        │
│                                      │
│ Good Luck! 🍀                        │
└──────────────────────────────────────┘
```

#### Thêm Motivation

**Push Notifications:**
- **Day 2:** "Come back tomorrow to unlock Day 3 rewards! 🎁" (gửi vào 6 PM)
- **Day 3 (nếu chưa quay lại):** "🎡 Spin the Fortune Wheel! Your Day 3 reward is waiting!" (gửi vào 12 PM + 6 PM)
- **Day 5:** "You're halfway to Legendary status! Keep the streak alive! 🔥" (gửi vào 7 PM)
- **Day 7 (nếu chưa quay lại):** "Final day for 1000 Gold + Free Premium Week! 💎" (gửi vào 12 PM)

#### Tác Dụng Tâm Lý

- **Loss Aversion:** Người chơi sợ "bỏ lỡ" phần thưởng lớn → mở app thường xuyên.
- **Variable Rewards:** Fortune Wheel tạo cảm giác ngẫu nhiên, kích thích dopamine.
- **Social Proof:** Leaderboard hàng tuần so sánh người chơi với bạn bè.
- **Gamification Cascade:** Mỗi milestone (Day 1, 3, 7) là 1 "wow moment" nhỏ.

---

---

## TÓNG KẾT

### 📊 Bảng Tóm Tắt Toàn Bộ Hệ Thống

| **Thành Phần** | **Chi Tiết** |
|----------|---------|
| **App Name** | Lingua Quest: The City of Words |
| **Platform** | iOS, Android |
| **Language** | English (A1-B1 levels) |
| **Target Audience** | Age 18-45, Language Learners |
| **Core Mechanic** | City Building + Mini-games + SRS |
| **4 Zones** | Grammar Bridge, Listening Lighthouse, Word Arena, Dialogue Train |
| **4 Mini-games** | Grammar, Listening, Vocabulary Speed, Dialogue Ordering |
| **Currency** | Gold Coins (earned) + Gems (premium/earned) |
| **SRS System** | Memory Vault (Kho Ký Ức) - Review forgotten words |
| **City Building** | 3 structures: Library, Temple, Garden |
| **Retention Loop** | Legendary Expedition (7-day challenge) |
| **KPIs** | Day-7 Retention ≥45%, Avg Session ≥15 min, Zone Completion ≥60% |

### 🎯 Next Steps (Bước Tiếp Theo)

1. ✅ **Dự án này đã được thiết kế chi tiết.**
2. ⏭️ **Chuyển sang giai đoạn:**
   - Đội thiết kế: Tạo mockup Figma chi tiết
   - Đội nội dung: Thu thập 1000 từ vựng + audio
   - Đội tech: Chọn tech stack (Unity/React Native) + xây dựng backend
   - Đội tiếp thị: Lên kế hoạch launch

---

**Document Version:** 1.0  
**Last Updated:** November 18, 2025  
**Author:** Lingua Quest Design Team
