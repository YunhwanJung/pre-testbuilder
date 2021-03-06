mocha.setup("bdd");
var chaiSpyShould = sinon.spy(window.chai, "should"),
  chaiSpyExpect = sinon.spy(window.chai, "expect");
document.addEventListener("DOMContentLoaded", function() {
  function e(e) {
    function t(n) {
      n
        ? i(n, function() {
            n.test() ? t(e[++o]) : n.print();
          })
        : k();
    }
    var o = 0;
    t(e[o]);
  }

  function t(e, t) {
    for (var o = 0; o < t.length; o++) if (!t[o]()) return !1;
    return S(e) || ((Q = !1), A(e)), !0;
  }

  function o() {
    return !!(S(1) || (T() && I()));
  }

  function n() {
    return !!(S(2) || (T() && I() && H() && O()));
  }

  function r() {
    return !(!F() || !R());
  }

  function a() {
    return q() && G();
  }

  function i(e, t) {
    e.mocha && !z
      ? ((document.getElementById("mocha").innerHTML = ""), (z = mocha.run(t)))
      : t();
  }

  function s() {
    console.log(
      [
        "주어진 모든 카드번호에 대해서 detectNetwork가 작동하는 것이 확실한가요?",
        "",
        "코드가 작동될거라고 느껴지시는 게 당연합니다. 이 과정에서 좌절감을 얻을 수도 있겠죠. 그러나 이렇게 하나하나 테스트하지 않는다면, 앞으로 생길 수 있는 예상치 못한 결과에 대응할 수가 없습니다. 다소 지루한 작업처럼 느껴질 수 있겠지만, 각 입력에 대해 실제로 함수를 테스트해보세요.",
        "",
        "%c항상 길이와 접두사의 모든 조합에 대해 함수를 호출하고 올바른 발급기관을 리턴하는지 확인하세요!%c, 이 작업을 수행할 때까지, 다음 단계로 넘어갈 수가 없습니다. 함수를 수정하면 페이지를 새로 고침하고, 모든 접두사와 길이 조합에 대해 다시 테스트를 시도해야 합니다. 이는, 함수를 변경하고 나서도 기존의 기능이 잘 작동되는지를 확인하기 위함입니다.",
        "",
        "예를 들어, detectNetwork를 다음과 같이 시도했을 때에는, American Express가 리턴되어야 합니다.",
        "   - 카드번호가 34로 시작하고, 숫자의 길이가 15개인 경우",
        "   - 카드번호가 37로 시작하고, 숫자의 길이가 15개인 경우",
        "detectNetwork를 다음과 같이 시도했을 때에는, Diner's Club이 리턴되어야 합니다.",
        "   - 카드번호가 38로 시작하고, 숫자의 길이가 14개인 경우",
        "   - 카드번호가 39로 시작하고, 숫자의 길이가 14개인 경우",
        "",
        "모든 길이와 접두어의 조합에 대해 detectNetwork를 실행했으면, nextStep을 호출하여 다음 단계로 넘어갈 수 있습니다.",
        "",
        "%c>%c nextStep()"
      ].join("\n"),
      "font-weight:bold",
      "font-weight:normal",
      "color:blue",
      "color:black"
    );
  }

  function c(e) {
    var t = [
        "Mocha 테스트에서 %c모든 테스트 범위%c를 커버하지 못했어요! 각 카드의 각 접두어와 길이 조합에 대해 테스트가 존재하는지 확인해주세요.",
        "",
        "예를 들어 American Express의 경우 다음과 같은 테스트가 있는지 확인하십시오.",
        "   - 카드번호가 34로 시작하고, 숫자의 길이가 15개인 경우",
        "   - 카드번호가 37로 시작하고, 숫자의 길이가 15개인 경우",
        ""
      ].join("\n"),
      o = ["font-weight:bold", "font-weight:normal"];
    if (e) {
      var n = m();
      (t += n.message), (o = o.concat(n.format));
    } else t += "Please try again!";
    console.log.apply(console, [t].concat(o));
  }

  function l(e, t) {
    for (
      var o = {
          1: f,
          2: d,
          3: g,
          4: y
        },
        n = !1,
        r = t;
      r >= e;
      r--
    )
      S(r) &&
        !n &&
        (console.log(
          [
            "%c%cUh-oh. It looks like you broke something that was previously working.",
            "",
            "Fix it before proceeding.",
            "",
            "See below for what step is no longer working.",
            ""
          ].join("\n"),
          "font-weight:bold",
          "color:#c00"
        ),
        e > 2 &&
          i(
            {
              mocha: !0
            },
            function() {}
          ),
        (n = !0),
        o[e]());
    n ||
      console.log(
        [
          "%c접두사와 길이%c의 모든 조합에 대해 함수가 제대로 작동하지 않는 것 같습니다.",
          "다시 시도하십시오!"
        ].join("\n"),
        "font-weight:bold",
        "font-weight:normal"
      );
  }

  function u() {
    console.log(
      [
        "STEP ONE:",
        "",
        "여러분의 목표는, 신용카드 번호를 바탕으로 해당 신용카드가 어떠한 발급기관(network)에 속해 있는지 알아낼 수 있는 함수를 작성하는 것입니다. 여러분은 여러분이 clone한 repository에 포함되어 있는 %cdetectNetwork.js%c 파일 안에다 이 함수를 작성하게 될 것입니다. 지금 찾아가서 살펴보시고, 다음 안내를 따라주세요.",
        "",
        "%cdetectNetwork.js%c은 브라우저의 <script> 태그를 이용해서 이미 로딩되어 있습니다. 만일 여러분들이 함수에 작은 변화를 만들었다면, 브라우저를 새로고침 해야만 합니다. 앞으로 STEP이 진행될 때마다 브라우저를 새로고침 해야 할텐데, 다행히도 TestBuilder는 여러분이 이전에 완료된 STEP의 대해 진행 상황을 저장합니다. 함수를 테스트할 준비가 되면, 콘솔에 다음과 같이 입력해보세요.",
        "",
        " %c>%c detectNetwork(%c'38345678901234'%c)",
        "",
        "만일 다음 출력을 보셨다면, 아주 잘 하고 계신겁니다!",
        "",
        ' %c<%c "%cDiner\'s Club%c"',
        "",
        "만일 그렇지 않은 경우는, 다시 돌아가서 함수를 수정할 수 있습니다. 단지 함수를 수정하고, 새로고침 하는 것을 잊지 말아주세요.",
        "",
        "다음은 여러분이 접두사와 카드번호 길이의 모든 조합에 대해, 함수가 작동되도록 시도할 수 있는 카드번호 목록입니다.",
        "",
        "38345678901234 (Diner's Club)",
        "39345678901234 (Diner's Club)",
        "343456789012345 (American Express)",
        "373456789012345 (American Express)",
        "",
        "%cdetectNetwork가 Diner's Club 및 American Express의 모든 접두사와 길이 조합에 대해 올바른 발급기관을 리턴하나요? 모든 조합이 잘 작동되면 이제 nextStep()을 호출해서 다음 단계로 넘어갈 수 있습니다. %c",
        "",
        "%c>%c nextStep()",
        ""
      ].join("\n"),
      "font-weight:bold",
      "font-weight:normal",
      "font-weight:bold ",
      "font-weight:normal",
      "color:lightgray",
      "color:black",
      "color:#c00",
      "color:black",
      "color:lightgray",
      "color:black",
      "color:#c00",
      "color:black",
      "font-weight:bold",
      "font-weight:normal",
      "color:blue",
      "color:black"
    );
  }

  function f() {
    console.log(
      [
        "STEP ONE is no longer working.",
        "",
        "As a reminder, step one was Diner's Club and American Express.",
        "",
        "Diner's Club always starts with a 38 or 39 and has a length of 14. American Express always starts with a 34 or 37 and has a length of 15",
        "",
        "Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: ",
        "",
        "38345678901234 (Diner's Club)",
        "39345678901234 (Diner's Club)",
        "343456789012345 (American Express)",
        "373456789012345 (American Express)",
        "",
        "%cWhen you've repaired detectNetwork to return the correct network for every prefix and length combination for Diner's Club and American Express, you can invoke nextStep: %c",
        "",
        "%c>%c nextStep()",
        ""
      ].join("\n"),
      "font-weight:bold",
      "font-weight:normal",
      "color:blue",
      "color:black"
    );
  }

  function h() {
    console.log(
      [
        "STEP TWO:",
        "잘 하셨습니다! 이젠 Visa 카드와 Mastercard 카드 번호도 알아낼 수 있도록 기능을 확장해볼까요?",
        "",
        "Visa는 항상 4의 접두사와 13, 16, 또는 19의 길이를 가집니다.",
        "MasterCard는 항상 51, 52, 53, 54, 또는 55의 접두사와 16의 길이를 가집니다.",
        "",
        "함수를 변경하고 나서, 이전에 만들었던 내용이 제대로 작동하리라는 보장을 할 수 없으므로 반드시 테스트를 해야 합니다. Diner's Club과 American Express에 대해서도 계속 지원하는지 확인하세요.",
        "",
        "다음은 여러분이 접두사와 카드번호 길이의 모든 조합에 대해, 함수가 작동되도록 시도할 수 있는 카드번호 목록입니다.",
        "",
        "38345678901234 (Diner's Club)",
        "39345678901234 (Diner's Club)",
        "343456789012345 (American Express)",
        "373456789012345 (American Express)",
        "4123456789012 (Visa)",
        "4123456789012345 (Visa)",
        "4123456789012345678 (Visa)",
        "5112345678901234 (MasterCard)",
        "5212345678901234 (MasterCard)",
        "5312345678901234 (MasterCard)",
        "5412345678901234 (MasterCard)",
        "5512345678901234 (MasterCard)",
        "",
        "",
        "%cdetectNetwork가 Diner's Club, American Express, Visa, 그리고 MasterCard의 모든 접두사와 길이 조합에 대해 올바른 발급기관을 리턴하나요? 모든 조합이 잘 작동되면 이제 nextStep()을 호출해서 다음 단계로 넘어갈 수 있습니다. %c",
        "",
        "%c>%c nextStep()"
      ].join("\n"),
      "font-weight:bold",
      "font-weight:normal",
      "color:blue",
      "color:black"
    );
  }

  function d() {
    console.log(
      [
        "STEP TWO is no longer working.",
        "",
        "As a reminder, step two added Visa and Mastercard.",
        "",
        "Visa always has a prefix of 4 and a length of 13, 16, or 19.",
        "MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.",
        "",
        "Make sure that you continue to support Diner's Club and American Express cards. Keep testing your implementation here in the console.",
        "",
        "Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: ",
        "",
        "38345678901234 (Diner's Club)",
        "39345678901234 (Diner's Club)",
        "343456789012345 (American Express)",
        "373456789012345 (American Express)",
        "4123456789012 (Visa)",
        "4123456789012345 (Visa)",
        "4123456789012345678 (Visa)",
        "5112345678901234 (MasterCard)",
        "5212345678901234 (MasterCard)",
        "5312345678901234 (MasterCard)",
        "5412345678901234 (MasterCard)",
        "5512345678901234 (MasterCard)",
        "",
        "",
        "%cWhen you've repaired detectNetwork and it returns the correct network for every prefix and length combination for Diner's Club, American Express, Visa, and MasterCard you can invoke nextStep: %c",
        "",
        "%c>%c nextStep()"
      ].join("\n"),
      "font-weight:bold",
      "font-weight:normal",
      "color:blue",
      "color:black"
    );
  }

  function w() {
    console.log(
      [
        "%cSTEP THREE:%c",
        "",
        "잘 하셨습니다! 이제는 하나하나 수동 테스트하는 고통을 덜고, 자동화된 테스트를 해보면 어떨까요? 다음 단계에서는 브라우저가 Mocha 및 Chai가 제공하는 자동화 테스트 모음으로 바뀝니다.",
        "",
        "자동화된 테스트는 개발자로서의 효율성을 위해 반드시 필요합니다. Mocha 테스트를 작성한 후, 페이지를 새로고침하는 것만으로 console.log 없이 함수의 작동 여부를 확인할 수 있습니다.",
        "",
        "테스트 모음이 실행될 때마다, 브라우저 창에 나타나는 보고서는 실패한 테스트를 명확하게 표시합니다.",
        "",
        "%c이제 준비가 되셨으면, nextStep을 실행하세요.%c",
        "",
        "%c>%c nextStep()"
      ].join("\n"),
      "font-weight:bold",
      "font-weight:normal",
      "font-weight:bold",
      "font-weight:normal",
      "color:blue",
      "color:black"
    );
  }

  function p() {
    console.log(
      [
        "",
        "자 브라우저 창에 테스트 모음이 보이시나요? 각 표제(Diner's Club과 같은)는 다른 테스트 세트이며, 각 표제 아래에는 테스트 목록이 표시됩니다. 테스트가 실패하면 ❌가, 성공하면 ✔️가 표시됩니다.",
        "",
        "테스트하려는 동작에 대해 확신할 때까지 detectNetwork.test.js의 테스트를 검사한 다음 테스트가 통과되도록 만드세요. 이렇게 하려면 몇 가지 테스트를 수정해야 할 겁니다. 그 후에, 다음 네트워크를 구현해보세요.",
        "",
        "Discover는 항상 6011, 65, 644에서 649까지의 접두사와 16, 또는 19의 길이를 가집니다.",
        "Maestro는 항상 5018, 5020, 5038 또는 6304의 접두사와 12에서부터 19까지의 길이를 가집니다.",
        "",
        "%cdetectNetwork가 Diner's Club, American Express, Visa, MasterCard, Discover 그리고 Maestro의 모든 접두사와 길이 조합에 대해 올바른 발급기관을 리턴하나요? 모든 조합이 잘 작동되면 이제 nextStep()을 호출해서 다음 단계로 넘어갈 수 있습니다. %c",
        "",
        "%c>%c nextStep()"
      ].join("\n"),
      "font-weight:bold",
      "font-weight:normal",
      "color:blue",
      "color:black"
    );
  }

  function g() {
    console.log(
      [
        "STEP THREE is no longer working.",
        "",
        "As a reminder, step three added Discover and Maestro, as well as the Mocha automated test suite.",
        "",
        "Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.",
        "Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.",
        "",
        "%cWhen detectNetwork is repaired to return the correct network for every prefix and length combination for Diner's Club, American Express, Visa, MasterCard, Discover, and Maestro, and the all of the tests in the Mocha suite are passing, you can invoke nextStep: %c",
        "",
        "%c>%c nextStep()"
      ].join("\n"),
      "font-weight:bold",
      "font-weight:normal",
      "color:blue",
      "color:black"
    );
  }

  function y() {
    console.log(
      [
        "훌륭합니다! 일단 Pre Course 과정에서는 여기까지만 해도 충분합니다. 수고하셨습니다!",
        "원한다면 다음의 두 발급기관에 대한 코드와 테스트를 작성해보는 것은 어떨까요?",
        "",
        "STEP FOUR:",
        "",
        "China UnionPay는 항상 622126-622925, 624-626, 또는 6282-6288의 접두사와 16-19의 길이를 가집니다.",
        "Switch는 항상 4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759의 접두사와 16, 18, 또는 19의 길이를 가집니다.",
        "",
        "잠시만요! Switch와 Visa의 카드번호를 검사할 때에 겹치는 부분이 있는 것 같습니다. 충돌이 있는 경우, 접두어의 길이가 긴 쪽으로 판별해야 합니다.",
        "",
        "%ccdetectNetwork가 Diner's Club, American Express, Visa, MasterCard, Discover, Maestro, China UnionPay, 그리고 Switch의 모든 접두사와 길이 조합에 대해 올바른 발급기관을 리턴하나요? 모든 조합이 잘 작동되면 이제 nextStep()을 호출해서 다음 단계로 넘어갈 수 있습니다. %c",
        "",
        "%c>%c nextStep()"
      ].join("\n"),
      "font-weight:bold",
      "font-weight:normal",
      "color:blue",
      "color:black"
    );
  }

  function m() {
    return {
      message: [
        "모든 테스트 케이스를 반복적으로 쓸 수도 있겠지만, 우리는 반복문을 배운 사람들이기 때문에, 각 테스트를 반복문을 통해 생성하면 더 좋겠죠?",
        "",
        "도움말: 아래 코드는 for 루프 안쪽에 생성되는 테스트의 예제입니다.",
        "",
        "%cfor (var prefix = 644; prefix <= 649; prefix++) {",
        "  it('has a prefix of ' + prefix + ' and a length of 16', function() {",
        "    console.log(prefix);",
        "  });",
        "  it('has a prefix of ' + prefix + ' and a length of 19', function() {",
        "    console.log(prefix);",
        "  });",
        "}",
        "",
        "%c위와 같이 코드를 작성하다보면, 콘솔 출력을 하는 prefix와, 테스트 케이스를 만드는 부분의 prefix가 서로 값이 다른 경우가 생길 것입니다.",
        "이는 scope와 관련된 문제로, it 함수의 인자로 들어가는 함수가 별개의 scope를 생성하기 때문입니다. 이 문제를 해결하려면, let 키워드나, IIFE(즉시 실행 함수)가 필요할 수 있습니다."
      ].join("\n"),
      format: ["color:blue", "font-weight: normal"]
    };
  }

  function b() {
    console.log(
      [
        "모든 테스트를 꼼꼼하게 작성한 것 같네요. 그런데 한가지 문제가 있어요. 여러분은 테스트를 작성할 때 %cshould 혹은 expect 중에 하나만%c 사용하는것이 좋습니다. 같이 사용하지 마세요.",
        "",
        "더 진행하기 전에 테스트를 리팩토링하세요."
      ].join("\n"),
      "font-weight:bold",
      "font-weight:normal"
    );
  }

  function k() {
    console.log(
      ["축하합니다! 여러분들은 이 과제의 모든 부분을 완료했습니다."].join("\n")
    );
  }

  function x() {
    return 0 === chaiSpyExpect.callCount || 0 === chaiSpyShould.callCount;
  }

  function v(e, t) {
    return (
      (e = "number" == typeof e ? e.toString() : e),
      e + new Array(t + 1 - e.length).join("0")
    );
  }

  function C() {
    return (
      z &&
      0 === z.stats.pending &&
      0 === z.stats.failures &&
      z.stats.passes === z.stats.tests
    );
  }

  function E(e, t) {
    var o = {};
    return (
      e.forEach(function(e) {
        t.forEach(function(t) {
          o[e] || (o[e] = {}), (o[e][t] = !1);
        });
      }),
      o
    );
  }

  function M(e, t) {
    return e === t.slice(0, e.length);
  }

  function N(e, t) {
    var o = E(e, t);
    J.args.forEach(function(e) {
      e = e[0];
      for (var t in o)
        M(t, e) && o[t].hasOwnProperty(e.length) && (o[t][e.length] = !0);
    });
    for (var n in o) for (var r in o[n]) if (!o[n][r]) return !1;
    return !0;
  }

  function S(e) {
    return !!window.localStorage.getItem("testing:" + e);
  }

  function A(e) {
    console.log("A works");
    window.localStorage.setItem("testing:" + e, !0);
  }

  function D() {
    return !!D || ((D = !0), !1);
  }

  function j(e) {
    return !(!S(e) && !Q) || ((Q = !0), !1);
  }

  function V() {
    return (
      "Diner's Club" === detectNetwork("38345678901234") &&
      "Diner's Club" === detectNetwork("39345678901234")
    );
  }

  function T() {
    return N([38, 39], [14]);
  }

  function P() {
    return (
      "American Express" === detectNetwork("343456789012345") &&
      "American Express" === detectNetwork("373456789012345")
    );
  }

  function I() {
    return N([34, 37], [15]);
  }

  function W() {
    return (
      "Visa" === detectNetwork("4123456789012") &&
      "Visa" === detectNetwork("4123456789012345") &&
      "Visa" === detectNetwork("4123456789012345678")
    );
  }

  function H() {
    return N([4], [13, 16, 19]);
  }

  function Y() {
    return (
      "MasterCard" === detectNetwork("5112345678901234") &&
      "MasterCard" === detectNetwork("5212345678901234") &&
      "MasterCard" === detectNetwork("5312345678901234") &&
      "MasterCard" === detectNetwork("5412345678901234") &&
      "MasterCard" === detectNetwork("5512345678901234")
    );
  }

  function O() {
    return N([51, 52, 53, 54, 55], [16]);
  }

  function U() {
    var e = [6011, 644, 645, 646, 647, 648, 649, 65],
      t = !0;
    return (
      e.forEach(function(e) {
        t =
          t &&
          "Discover" === detectNetwork(v(e, 16)) &&
          "Discover" === detectNetwork(v(e, 19));
      }),
      t
    );
  }

  function F() {
    return N([6011, 644, 645, 646, 647, 648, 649, 65], [16, 19]);
  }

  function L() {
    for (var e = !0, t = 12; t <= 19; t++)
      e =
        e &&
        "Maestro" === detectNetwork(v("5018", t)) &&
        "Maestro" === detectNetwork(v("5020", t)) &&
        "Maestro" === detectNetwork(v("5038", t)) &&
        "Maestro" === detectNetwork(v("6304", t));
    return e;
  }

  function R() {
    return N([5018, 5020, 5038, 6304], [12, 13, 14, 15, 16, 17, 18, 19]);
  }

  function K() {
    for (var e = !0, t = 16; t <= 19; t++) {
      for (var o = 622126; o <= 622925; o++)
        e = e && "China UnionPay" === detectNetwork(v(o, t));
      for (var o = 624; o <= 626; o++)
        e = e && "China UnionPay" === detectNetwork(v(o, t));
      for (var o = 6282; o <= 6288; o++)
        e = e && "China UnionPay" === detectNetwork(v(o, t));
    }
    return e;
  }

  function q() {
    for (var e = [], t = 622126; t <= 622925; t++) e.push(t);
    for (var t = 624; t <= 626; t++) e.push(t);
    for (var t = 6282; t <= 6288; t++) e.push(t);
    return N(e, [16, 17, 18, 19]);
  }

  function B() {
    var e = [
        "4903",
        "4905",
        "4911",
        "4936",
        "564182",
        "633110",
        "6333",
        "6759"
      ],
      t = [16, 18, 19],
      o = !0;
    return (
      e.forEach(function(e) {
        t.forEach(function(t) {
          o = o && "Switch" === detectNetwork(v(e, t));
        });
      }),
      o
    );
  }

  function G() {
    return N(
      [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759],
      [16, 18, 19]
    );
  }
  var z,
    J = sinon.spy(window, "detectNetwork"),
    Q = !1,
    X = [
      {
        print: u,
        test: j.bind(null, 1),
        mocha: !1
      },
      {
        print: s,
        test: o,
        mocha: !1
      },
      {
        print: l.bind(null, 1, 4),
        test: t.bind(null, 1, [V, P]),
        mocha: !1
      },
      {
        print: h,
        test: j.bind(null, 2),
        mocha: !1
      },
      {
        print: s,
        test: n,
        mocha: !1
      },
      {
        print: l.bind(null, 2, 4),
        test: t.bind(null, 2, [W, Y]),
        mocha: !1
      },
      {
        print: w,
        test: j.bind(null, 3),
        mocha: !1
      },
      {
        print: p,
        test: D,
        mocha: !0
      },
      {
        print: c.bind(null, !0),
        test: r,
        mocha: !0
      },
      {
        print: b,
        test: x,
        mocha: !0
      },
      {
        print: l.bind(null, 3, 4),
        test: t.bind(null, 3, [C, U, L]),
        mocha: !0
      },
      {
        print: y,
        test: j.bind(null, 4),
        mocha: !0
      },
      {
        print: c.bind(null, !0),
        test: a,
        mocha: !0
      },
      {
        print: l.bind(null, 4, 4),
        test: t.bind(null, 4, [C, K, B]),
        mocha: !0
      }
    ];
  e(X),
    (window.nextStep = function() {
      e(X);
    });
  var D = !1;
});
