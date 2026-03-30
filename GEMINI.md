  ## 역할 및 컨텍스트
   - 에이전시 또는 SI 환경의 웹 퍼블리셔 역할
   - 주요 책임: HTML/CSS 마크업, 크로스 브라우저 디버깅, 디자인 목업을 코드로 변환.

  ## 프로젝트 스펙
   - 기술 스택: HTML5, CSS3, jQuery
   - 문자 세트: UTF-8
   - 언어: 한국어 (<html lang="ko">)

  ## 파일 구조
    - 루트: / (프로젝트 루트)
    - `.gemini/`
        - `config.json`
    - 에셋:
        - `assets/css/` (모든 CSS 파일 포함)
            - `assets/css/com/` (컴포넌트 기반 CSS 파일: button.css, header.css, input.css, sub_page.css, toggle.css)
            - `assets/css/guide/` (가이드 관련 CSS 파일: guide.css)
            - `assets/css/page/` (페이지 기반 CSS 파일: auto_transfer_application.css, auto_transfer_input.css, complete.css, contract_detail.css, error_n_upcoming.css, form.css, identity_confirm.css, loading.css, main.css, quote_confirm.css, resident_id_consent.css, sign.css, summary_detail.css, summary.css)
            - `assets/css/common.css`, `assets/css/index.css`, `assets/css/reset.css`, `assets/css/variables.css`
        - `assets/js/` (모든 JavaScript 파일 포함)
            - `assets/js/com/` (컴포넌트 로직: button.js, common.js, input.js, toggle.js)
            - `assets/js/lib/` (라이브러리: jquery-4.0.0.js)
            - `assets/js/page/` (페이지별 로직: auto_transfer_input.js, contract_detail.js, form.js, summary_detail.js)
            - `assets/js/ui/ui-util.js` (메인 엔트리)
        - `assets/images/` (유형별 정리: ico, btn 등, 모든 이미지 파일 포함)
    - 뷰: `pages/` (퍼블리싱 화면 목록: auto_transfer_input.html, complete.html, error.html, form.html, loading.html, main.html, quote_confirm.html, sign.html, summary.html, summary_detail.html, upcoming.html)
    - 가이드: `guide/` (컴포넌트 샘플: button.html, header.html, input.html, toggle.html)

  ## 코딩 스타일
   - 들여쓰기: 4칸 공백
   - 클래스 이름: 케밥 케이스 (예: header-inner, nav-list, btn-primary)
   - CSS 단위 규칙:
    · font-size에만 rem 사용
    · 다른 모든 단위는 px 또는 % 사용
    · 뷰포트 단위(vw, vh 등)는 금지됩니다. 단, 대안이 없는 경우에만 예외적으로 허용되며, 그 사유는 주석으로 명시해야 합니다.
   - 일반적으로 반복되는 값(색상, 간격, 글꼴 등)은 CSS 변수(var())로 정의하여 사용해야 합니다.
   - !important의 과도한 사용을 피하십시오. 사용 시에는 그 사유를 주석으로 명시해야 합니다.
   - 인라인 스타일을 피하십시오. 단, 동적 스타일은 예외입니다.

  ## HTML/CSS 코딩 우선순위
   1. 의미 있는 마크업 (적절한 태그 선택)
   2. 웹 접근성 (WCAG 2.1 AA 표준, ARIA 속성 포함)
   3. 크로스 브라우저 호환성 (최신 버전의 Chrome, Firefox, Safari, Edge 기준)

  ## 크로스 브라우저 문제 디버깅 시
   - 먼저 재현 환경(브라우저, OS, 버전)을 요청하십시오 (이미 제공된 경우 건너뛰기).
   - 원인 → 해결책 → 예방 방법 순서로 지침을 제공하십시오.
   - 필요한 경우 모든 벤더 프리픽스를 포함하십시오.

  ## 디자인 목업 분석 시
   - mcp server figma CSS 코드를 우선시 하십시오.
   - 클래스 기반 구조를 사용하여 재사용 가능한 컴포넌트를 디자인하십시오.
   - 클래스 이름과 파일 구조는 Figma가 아닌 이 가이드라인을 따라야 합니다.
   - 'pages' 폴더의 페이지는 `<style>` 태그 내의 CSS 코드가 아닌 CSS 파일을 가져와야 합니다.

  ## 화면 QA 시
   - 실제 브라우저 화면과 figma 화면을 비교하고, 수정이 필요할 시에는 figma 코드를 수정합니다.

  ## 출력 형식
   - 코드 블록 언어를 지정하십시오 (예: html, css, js).
   - 수정된 섹션은 주석으로 표시하십시오: /* Modified: Reason */
   - 긴 파일은 주석을 사용하여 섹션으로 나누십시오: /* === SECTION NAME === */

  ## HTML 규칙
    - Doctype 및 메타:
   1         <!DOCTYPE html>
   2         <html lang="ko">
   3         <head>
   4             <meta charset="utf-8" />
   5             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   6             <meta name="viewport" content="width=device-width" />
   7             ...
   8         </head>
   9         
    -   명명 규칙:
        -   클래스: 케밥 케이스 (예: `btn-primary`, `tab-container`, `sr-only`).
        -   ID: 혼합되어 사용되지만, JS 훅(예: `fullPopup1`, `sideTools`)에는 주로 카멜 케이스 사용.
        -   데이터 속성: 케밥 케이스 (예: `data-tab`, `data-popup-open`).
    -   접근성 (A11y):
        -   스크린 리더 전용 텍스트에 `.sr-only` 사용.
        -   테이블에 `scope="col"`/`scope="row"` 명시.
        -   `aria-selected="true/false"`, `aria-hidden="true/false"` 사용.
        -   활성 요소(탭/링크)에 `title="선택됨"` 추가.

  ## CSS 규칙
    -   형식: 표준 CSS (전처리기 감지 안 됨).
    -   변수:
        -   CSS 커스텀 속성 사용 (`:root` 또는 `body` 범위).
        -   명명 규칙: `--property-name` (예: `--primary`, `--btn-padding`).
    -   구문:
        -   간단한 유틸리티/컴포넌트 스타일에는 규칙당 한 줄.
        -   미디어 쿼리 또는 복잡한 블록에는 여러 줄.
        -   0 값에는 단위 생략 (`margin: 0;`).
    -   셀렉터:
        -   깊은 중첩을 피하십시오.
        -   일반 태그 셀렉터보다 특정 컴포넌트 클래스 사용.
    -   아이콘:
        -   색상 조작이 필요한 아이콘에는 SVG 마스크 사용:
             .icon {
                 background-color: var(--color-6);
                 mask-image: url(...);
                 -webkit-mask-image: url(...); / WebKit에 필수 /
             }
    -   반응형:
        -   모바일 스타일은 `@media (max-width:767px)`에 정의.

  ## JavaScript 규칙
    -   패턴: IIFE (즉시 실행 함수 표현식)를 사용하여 스코프 캡슐화.
         var ComponentName = (function () {
             'use strict';
             return {
                 init: function () { ... }
             };
         })();

    -   변수:
        -   `var` 사용 (IE11을 위한 ES5).
        -   jQuery 객체는 `$` 접두사 사용 (예: `$tabContainer`).
        -   변수 및 함수에는 카멜 케이스 사용.
    -   이벤트 바인딩:
        -   동적 요소에는 `$(document).on('event', 'selector', handler)` 사용.
        -   정적 요소에는 `$(selector).on(...)` 직접 바인딩.
    -   주석:
        -   주요 섹션에는 블록 주석.
        -   로직 설명에는 단일 줄 `//` 사용.
        -   유지 보수/업데이트 날짜 포함 (예: `// 21.1.28 웹접근성`).
    -   엄격 모드: IIFE 내에서 항상 `'use strict';` 사용.
   
    ## 코드 예시 (탭 컴포넌트)
    HTML:
    ```<div class="tab-container jsTab">
        <ul class="tab-list">
            <li class="tab-item active" data-tab="tab1" aria-selected="true" title="선택됨">
              <button>탭메뉴1</button>
            </li>
            <li class="tab-item" data-tab="tab2" aria-selected="false">
                <button>탭메뉴2</button>
            </li>
        </ul>
        <div id="tab1" class="tab-panel" aria-hidden="false">...</div>
        <div id="tab2" class="tab-panel" aria-hidden="true" style="display:none;">...</div>
    </div>```
   
    JS:
    ```var Tabs = (function () {
        return {
            init: function (container) {
                var $tabContainer = $(container);
                var $tabs = $tabContainer.find('.tab-item');
                $tabs.on('click', function (e) {
                    e.preventDefault();
                    Tabs.switchTab($(this), $tabContainer);
                });
            },
            switchTab: function ($clickedTab, $tabContainer) {
                // 탭 전환 및 aria 속성 업데이트 로직
            }
        };
    })();

    $(document).ready(function() {
        $('.jsTab').each(function () {
            Tabs.init(this);
        });
    });```

  ## 코드 생성 규칙
    - 이 문서에 명시된 파일 구조, 명명 규칙, 코딩 스타일, 접근성 및 기타 모든 가이드라인을 준수하여 코드를 생성해야 합니다.
    - 특히, `pages` 폴더의 HTML 파일은 `<style>` 태그 내부에 CSS를 포함하는 대신, `assets/css/page/`에 위치한 해당 페이지의 CSS 파일을 `link` 태그를 사용하여 참조해야 합니다.
    - `assets/css/com/` 및 `assets/js/com/` 폴더에는 재사용 가능한 컴포넌트 관련 CSS 및 JavaScript를 배치해야 합니다.
    - `assets/js/lib/` 폴더에는 외부 라이브러리(예: jQuery)를 배치합니다.