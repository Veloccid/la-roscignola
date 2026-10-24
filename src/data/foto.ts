// Foto vere della Roscignola (file originali del cliente, solo rinominati).
export const FOTO = {
  piscinaColline: { src: '/foto/piscina-colline.jpg', alt: 'Piscina della Roscignola con vista sulle colline' },
  piscinaGazebo: { src: '/foto/piscina-gazebo.jpg', alt: 'Piscina con gazebo e ulivi' },
  piscinaGiardino: { src: '/foto/piscina-giardino.jpg', alt: 'Piscina e giardino della Roscignola' },
  cucinaCamino: { src: '/foto/cucina-camino.jpg', alt: 'Cucina con camino e tavolo apparecchiato' },
  cucina: { src: '/foto/cucina.jpg', alt: 'Cucina della casa' },
  bagno: { src: '/foto/bagno.jpg', alt: 'Bagno con doccia' },
  cameraArmadio: { src: '/foto/camera-armadio.jpg', alt: 'Camera con armadio a specchio' },
  cameraMatrimoniale: { src: '/foto/camera-matrimoniale.jpg', alt: 'Camera matrimoniale con testiera blu' },
  vistaBorgo: { src: '/foto/vista-borgo.jpg', alt: 'Vista sul borgo e sulle colline dal giardino' },
  giardino: { src: '/foto/giardino-gazebo-barbecue.jpg', alt: 'Giardino con gazebo, tavolo e barbecue' },
} as const;

export type ChiaveFoto = keyof typeof FOTO;
