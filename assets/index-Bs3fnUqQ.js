(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const m=(e,t)=>{t&&e&&localStorage.setItem(e,JSON.stringify(t))},h=e=>!!localStorage.getItem(e),k=e=>{h(e)&&localStorage.removeItem(e)},v=e=>localStorage.getItem(e),y=e=>{let t=v(e);return t?JSON.parse(t):null};let s=y("tasks")??[];const T=(e,t)=>{const a={id:Date.now(),text:e,done:!1};s.push(a),m("tasks",s)},b=e=>{s=s.filter(t=>t.id!==Number(e)),m("tasks",s)},L=e=>{const t=s.findIndex(a=>a.id===Number(e));s[t].done=!s[t].done,m("tasks",s)},c={task(e,t){e.innerHTML+=`
          <li id="${t.id}" class="task">
          <span class="${t.done?"done":"task-title"}">${t.text}</span>

            <div class="wrapper-info">
              <div class="data-wrapper">
                <span class="data">Дата добавления: ${new Date(t.id).toLocaleString()}</span>
              </div>
              <div class="task-btn">
              <button class="task-done btn" data-action="done" data-id=${t.id}>Готово</button>
              <button class="task-remove btn" data-action="delete" data-id=${t.id}>Удлить</button>
            </div>
            </div>
          </li>
          `},allTasks(e,t){e.innerHTML="",t==null||t.forEach(a=>{c.task(e,a)})}},r=document.querySelector(".task-container"),S=document.querySelector(".form"),g=document.querySelector(".input-task"),p=document.querySelector(".out-container_pending"),$=document.querySelector(".btn-remove__all"),i=document.querySelector(".out-caunter"),d=()=>{r.children.length<=0?p.classList.remove("hidden"):p.classList.add("hidden")};c.allTasks(r,s);d();u(i);S.addEventListener("submit",function(e){e.preventDefault(),T(g.value),c.allTasks(r,s),g.focus(),g.value="",u(i),d()});r.addEventListener("click",D);r.addEventListener("click",O);function D(e){e.target.dataset.action==="delete"&&(b(e.target.dataset.id),c.allTasks(r,s),d())}function O(e){e.target.dataset.action==="done"&&(L(e.target.dataset.id),c.allTasks(r,s)),u(i)}$.addEventListener("click",()=>{k("tasks"),s.length=0,c.allTasks(r,s),d(),u(i)});function u(e){const a=s.filter(n=>n.done===!0).length,l=s.length;e.innerHTML=`<h3>Выполненно ${a} задачи, не выполенно ${l}</h3>`}
