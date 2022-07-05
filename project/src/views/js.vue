<script setup lang="ts">
import { useBackTop } from "../stores/backTop";
import { onMounted, ref } from 'vue';
const scroller = ref()
onMounted(() => {
  const service = useBackTop();
  service.setScrollDom(scroller.value)
})
const catalog = [
  "closure",
  "this",
  "call, apply",
  "bind",
  "prototype",
  "promise",
  "async/await",
  "copy",
  "eventLoop",
  "es6",
];
const elementScrollIntoView = (id: number) => {
  document.querySelector(`#js-${id}`)?.scrollIntoView({ behavior: "smooth" });
};

</script>
<template>
  <div class="route-js" ref="scroller">
    <h1>Vanilla JS</h1>
    <ul>
      <li
        v-for="(item, index) of catalog"
        @click="elementScrollIntoView(index)"
      >
        {{ item }}
      </li>
    </ul>

    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
      assumenda numquam impedit provident hic harum ea architecto iure sapiente
      tempora modi dignissimos molestias doloremque laudantium error aliquid
      nesciunt, fuga veniam distinctio nemo vitae qui velit voluptate. Ratione,
      quod iure veritatis quo doloremque id dignissimos, laborum assumenda odit
      magni, amet quidem ea porro expedita reiciendis cumque molestiae
      voluptates blanditiis veniam. Suscipit commodi id dolorem, placeat, qui
      optio culpa laudantium deserunt cupiditate illum magnam vitae minus iure.
      Voluptate ab odit, laborum error est, dolore vero expedita aliquam fuga
      quaerat officia quod dolorum. Ad, excepturi? Facere cupiditate incidunt
      repudiandae, expedita molestias pariatur laboriosam aliquam aspernatur
      reprehenderit dolore explicabo ratione harum iusto voluptatum quibusdam
      alias assumenda illo corrupti quidem omnis nostrum maiores deleniti neque!
      Et libero minima fugit sed pariatur sint placeat corporis vel, minus, ea
      asperiores fuga repellendus exercitationem magni similique velit neque
      eius quaerat adipisci suscipit ducimus repudiandae autem! Qui expedita
      nobis optio modi excepturi voluptas perferendis autem, quos, nostrum, quam
      nesciunt reiciendis numquam fugit odit. Iste mollitia voluptatem quidem
      iure illo molestias voluptates eaque assumenda quae aliquam a, beatae
      quasi eum explicabo, architecto vitae temporibus animi laboriosam tempore
      veniam exercitationem provident? Deserunt autem, ullam veritatis nemo
      eaque distinctio nobis similique necessitatibus reprehenderit ipsa
      praesentium neque odit itaque quos quas, facilis, unde quod. Cum nobis,
      expedita et recusandae harum corrupti iusto? Laudantium cumque, obcaecati
      iusto laboriosam beatae numquam. Eum natus dolorum doloremque tempore
      magnam esse perspiciatis quibusdam deleniti eveniet enim, harum beatae
      inventore, vero veniam explicabo nam ad iusto distinctio quas atque
      tenetur? Ratione dolore facilis suscipit eligendi, unde dicta doloribus
      aperiam illum consequatur culpa aspernatur? Corporis ratione mollitia
      maiores veniam aliquid. Molestias cupiditate officiis sapiente dolore,
      fuga reiciendis rerum debitis laborum ad. Reprehenderit asperiores in
      quisquam ipsa quaerat! Qui pariatur maiores facilis optio consequuntur.
      Perspiciatis consequuntur doloribus aperiam pariatur debitis deserunt enim
      quibusdam, fuga in esse quae animi ipsam qui voluptatem ad. Rerum, odit
      sit doloribus tenetur beatae velit dignissimos ex, porro ullam pariatur
      odio assumenda molestiae nesciunt debitis culpa et soluta? Inventore sunt
      hic similique corrupti veniam dolorum aspernatur quisquam accusamus in
      iusto fugit veritatis optio animi harum esse ipsam voluptatibus eveniet
      facere molestias, necessitatibus, commodi dolore officiis facilis rem?
      Quos accusantium, iusto animi a minima inventore beatae velit, sapiente
      rerum error, cupiditate ex labore veritatis tenetur vel hic blanditiis
      quas! A, eos expedita laborum possimus ab accusamus ad modi, libero
      accusantium rerum quis. Perspiciatis soluta voluptas, excepturi ipsa,
      asperiores fuga molestiae necessitatibus pariatur error et quas reiciendis
      cum sunt officiis est impedit hic dolores accusantium vero eligendi.
      Veritatis voluptates, deserunt illum consequuntur eos numquam, eum
      reiciendis eaque earum molestias ipsam ex omnis ipsum blanditiis,
      perferendis odio odit nobis. Ipsum veniam explicabo, animi laudantium odit
      doloribus? Accusantium illum doloribus natus enim! Nisi unde, voluptatibus
      sed porro corporis iste? Dolore, tenetur doloremque sequi officia neque
      minima necessitatibus quas laudantium in est iure dicta unde doloribus
      similique, ex animi quos itaque obcaecati quisquam temporibus ut
      architecto ipsa? Odit, unde voluptatibus voluptatum modi ex asperiores
      dolores earum. Repudiandae commodi, voluptates necessitatibus rerum qui
      iusto, sint illum sit beatae quasi ut deleniti, voluptatum itaque
      architecto cumque debitis porro. Cupiditate hic sapiente a incidunt est
      laudantium autem, qui expedita iusto laboriosam dicta, beatae quasi velit
      harum earum possimus! Blanditiis eos sequi nostrum, cupiditate labore
      voluptates in cumque laborum possimus mollitia, inventore autem aliquam
      aut velit quis! Fuga, mollitia perspiciatis harum nam neque illum.
      Accusamus, maxime. Error dignissimos sint eligendi optio quod rem! Fugiat
      exercitationem magni commodi itaque excepturi saepe aut hic quam, debitis
      eum non earum architecto. Nesciunt omnis quam earum commodi soluta,
      corporis doloremque, voluptates, delectus a voluptatibus ratione rem
      obcaecati odit aut illum mollitia accusantium similique ullam explicabo
      dolores dolorum recusandae in! Iste autem placeat nesciunt ab. Vitae
      asperiores voluptatibus corrupti! Sequi dolor consectetur accusamus minus,
      optio veniam corrupti neque beatae aliquid ad consequuntur nostrum enim
      ullam molestias facere doloribus aliquam culpa sed inventore nisi
      voluptatem placeat tempore alias. Aperiam labore unde laborum
      exercitationem hic ullam, blanditiis natus, omnis possimus facere
      distinctio porro sed incidunt deserunt neque dolorum aliquam, corporis
      est. Architecto illum cum quis cumque nam assumenda, modi perferendis
      saepe dicta ullam rerum est porro doloremque corrupti voluptate rem
      accusantium minima ad dolorem repudiandae magnam eos praesentium adipisci
      aut! Voluptates voluptatum necessitatibus vel praesentium laborum ad
      temporibus molestias voluptate facilis! Harum optio veritatis aperiam
      voluptas, pariatur, quod dolore inventore molestiae, porro voluptate
      laudantium nobis odit. Magni ex quidem pariatur corporis consectetur at
      aliquam aut saepe, obcaecati nihil iusto eaque laudantium non minus hic
      cum consequatur quis autem consequuntur dolores quod, vitae eligendi. Nisi
      quam tempora rerum, autem similique asperiores vero laudantium obcaecati
      fugit sint saepe amet sapiente harum exercitationem! Assumenda ea porro,
      quisquam explicabo iusto commodi alias nisi, in vero mollitia doloremque
      numquam odio maxime molestias beatae? Vel ad rerum blanditiis unde
      adipisci tempora, possimus ex nobis placeat architecto, fugiat
      reprehenderit autem amet delectus odio ea veritatis consectetur quisquam
      facilis ut sed quam assumenda nam. Rerum quasi ipsam consequuntur laborum
      maiores libero debitis sint molestiae accusantium. Maxime nihil ea enim
      consequuntur ipsum laborum voluptates, nesciunt itaque molestias. Adipisci
      ratione sunt, aspernatur similique sapiente consectetur. Obcaecati unde,
      illo eligendi blanditiis aut molestias quod soluta, doloribus id
      consequuntur animi veniam architecto a enim, vero nesciunt quos sed
      laboriosam? Nisi nam cupiditate accusamus, fuga vero ex nobis mollitia
      maxime aut error iure laudantium id delectus culpa? Aspernatur accusantium
      cum quibusdam alias in illo possimus minima soluta quos. Dicta labore
      aspernatur natus ipsam quo fuga. Modi quam magnam officiis! Deleniti eius
      ea neque non et enim, expedita error quia ipsum distinctio, cumque
      voluptatum voluptas aliquam suscipit voluptatem unde officia praesentium,
      cupiditate minus! Eaque ipsum mollitia non nostrum asperiores minima atque
      consectetur rerum saepe tempore dolor maiores inventore dolorum, libero
      porro quod sequi iusto aspernatur explicabo, eligendi exercitationem
      expedita est aut a. Quisquam, voluptate voluptatibus? Accusamus, esse
      tempore labore officia laboriosam excepturi iure odit dignissimos deserunt
      quo nisi perspiciatis exercitationem amet blanditiis fugit ipsum delectus
      pariatur eveniet molestias asperiores, placeat voluptate expedita. Vel,
      cupiditate. Corrupti, nam blanditiis quia magni, cumque quo labore ducimus
      voluptatibus molestias autem earum.
    </div>
    <div id="js-0">closure</div>

    <div id="js-1">this</div>
  </div>
</template>

<style scoped>
.route-js {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>
